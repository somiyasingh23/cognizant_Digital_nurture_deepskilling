package factory;
public class WordDocumentfactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
