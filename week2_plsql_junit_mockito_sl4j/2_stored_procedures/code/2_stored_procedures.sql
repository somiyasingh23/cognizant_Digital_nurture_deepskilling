DELIMITER $$

CREATE PROCEDURE BankDB.ProcessMonthlyInterest()
BEGIN
    UPDATE Accounts
    SET Balance = Balance * 1.01
    WHERE AccountType = 'Savings';
END $$

DELIMITER ;
SET SQL_SAFE_UPDATES = 0;
CALL BankDB.ProcessMonthlyInterest();
SELECT * FROM BankDB.Accounts WHERE AccountType = 'Savings';




DELIMITER $$

CREATE PROCEDURE BankDB.UpdateEmployeeBonus(IN dept_name VARCHAR(50), IN bonus_percent DECIMAL(5,2))
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percent / 100)
    WHERE Department = dept_name;
END $$

DELIMITER ;


CALL BankDB.UpdateEmployeeBonus('HR', 10);
SELECT * FROM BankDB.Employees WHERE Department = 'HR';


DELIMITER $$

CREATE PROCEDURE BankDB.TransferFunds(
    IN from_account INT,
    IN to_account INT,
    IN amount DECIMAL(12,2)
)
BEGIN
    DECLARE from_balance DECIMAL(12,2);

    -- Get balance of source account
    SELECT Balance INTO from_balance
    FROM Accounts
    WHERE AccountID = from_account;

    -- Check if sufficient balance
    IF from_balance >= amount THEN
        -- Deduct from source
        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = from_account;

        -- Add to destination
        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = to_account;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient funds in source account.';
    END IF;
END $$

DELIMITER ;

CALL BankDB.TransferFunds(1, 2, 100.00);
SELECT AccountID, Balance FROM BankDB.Accounts WHERE AccountID IN (1, 2);



