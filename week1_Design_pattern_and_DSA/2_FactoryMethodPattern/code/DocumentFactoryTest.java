package factory;
public class DocumentFactoryTest {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentfactory();
        wordFactory.createDocument().open();  // Opens example.docx

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        pdfFactory.createDocument().open();   // Opens example.pdf

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        excelFactory.createDocument().open(); // Opens example.xlsx
    }
}

