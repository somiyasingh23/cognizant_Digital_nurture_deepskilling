CREATE DATABASE BankDB;
CREATE TABLE BankDB.Customers (
    CustomerID    INT PRIMARY KEY,
    Name          VARCHAR(100),
    DOB           DATE,
    Balance       DECIMAL(12,2),
    LastModified  DATETIME
);

CREATE TABLE BankDB.Accounts (
    AccountID     INT PRIMARY KEY,
    CustomerID    INT,
    AccountType   VARCHAR(20),
    Balance       DECIMAL(12,2),
    LastModified  DATETIME,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
CREATE TABLE BankDB.Transactions (
    TransactionID     INT PRIMARY KEY,
    AccountID         INT,
    TransactionDate   DATETIME,
    Amount            DECIMAL(12,2),
    TransactionType   VARCHAR(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);
CREATE TABLE BankDB.Loans (
    LoanID        INT PRIMARY KEY,
    CustomerID    INT,
    LoanAmount    DECIMAL(12,2),
    InterestRate  DECIMAL(5,2),
    StartDate     DATE,
    EndDate       DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
CREATE TABLE BankDB.Employees (
    EmployeeID   INT PRIMARY KEY,
    Name         VARCHAR(100),
    Position     VARCHAR(50),
    Salary       DECIMAL(10,2),
    Department   VARCHAR(50),
    HireDate     DATE
);
-- Customers
INSERT INTO BankDB.Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'John Doe', '1985-05-15', 1000.00, NOW());

INSERT INTO BankDB.Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Jane Smith', '1990-07-20', 1500.00, NOW());

-- Accounts
INSERT INTO BankDB.Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings', 1000.00, NOW());

INSERT INTO BankDB.Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Checking', 1500.00, NOW());

-- Transactions
INSERT INTO BankDB.Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (1, 1, NOW(), 200.00, 'Deposit');

INSERT INTO BankDB.Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (2, 2, NOW(), 300.00, 'Withdrawal');

-- Loans
INSERT INTO BankDB.Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000.00, 5.00, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 60 MONTH));


-- Employees
INSERT INTO BankDB.Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (1, 'Alice Johnson', 'Manager', 70000.00, 'HR', '2015-06-15');

INSERT INTO BankDB.Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (2, 'Bob Brown', 'Developer', 60000.00, 'IT', '2017-03-20');
DELIMITER $$

CREATE PROCEDURE BankDB.ApplySeniorLoanDiscount()
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE cust_id INT;
    DECLARE cur CURSOR FOR
        SELECT CustomerID FROM Customers
        WHERE TIMESTAMPDIFF(YEAR, DOB, CURDATE()) > 60;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO cust_id;
        IF done THEN
            LEAVE read_loop;
        END IF;

        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust_id;

    END LOOP;
    CLOSE cur;
END $$

DELIMITER ;

CALL BankDB.ApplySeniorLoanDiscount();
SELECT * FROM Bankdb.Loans;


ALTER TABLE BankDB.Customers ADD IsVIP BOOLEAN DEFAULT FALSE;
DELIMITER $$

CREATE PROCEDURE BankDB.PromoteVIPCustomers()
BEGIN
    UPDATE Customers
    SET IsVIP = TRUE
    WHERE CustomerID IN (
        SELECT CustomerID FROM (SELECT CustomerID FROM Customers WHERE Balance > 10000) AS tmp
    );
END $$

DELIMITER ;
SET SQL_SAFE_UPDATES = 0;


CALL BankDB.PromoteVIPCustomers();

SELECT CustomerID, Name, Balance, IsVIP FROM BankDB.Customers;


DELIMITER $$

CREATE PROCEDURE BankDb.SendLoanReminders()
BEGIN
    SELECT 
        c.Name AS CustomerName,
        l.LoanID,
        l.EndDate,
        CONCAT('Reminder: Dear ', c.Name, ', your loan (ID: ', l.LoanID, ') is due on ', l.EndDate) AS ReminderMessage
    FROM Loans l
    JOIN Customers c ON c.CustomerID = l.CustomerID
    WHERE l.EndDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);
END $$

DELIMITER ;

CALL BankDB.SendLoanReminders();
UPDATE BankDb.Loans SET EndDate = DATE_ADD(CURDATE(), INTERVAL 10 DAY) WHERE LoanID = 1;

