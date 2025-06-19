package factory;
import java.io.File;
import java.io.IOException;
import java.awt.Desktop;

public class WordDocument implements Document {
    @Override
    public void open() {
        try {
            File file = new File("example.docx");
            if (!file.exists()) {
                file.createNewFile(); // create dummy file
            }
            Desktop.getDesktop().open(file);
        } catch (IOException e) {
            System.out.println("Failed to open Word document.");
        }
    }
}
