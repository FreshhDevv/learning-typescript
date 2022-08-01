function render(document: unknown) {
    if (document instanceof WordDocument) {
        document.toUpperCase();
    }
    document.move();
    document.fly();
    document.whateverWeWant();
}