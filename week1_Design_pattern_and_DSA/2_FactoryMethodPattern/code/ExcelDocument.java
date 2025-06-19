package factory;
import java.io.File;
import java.io.IOException;
import java.awt.Desktop;

public class ExcelDocument implements Document {
    @Override
    public void open() {
        try {
            File file = new File("example.xlsx");
            if (!file.exists()) {
                file.createNewFile(); // create dummy file
            }
            Desktop.getDesktop().open(file);
        } catch (IOException e) {
            System.out.println("Failed to open Excel document.");
        }
    }
}
