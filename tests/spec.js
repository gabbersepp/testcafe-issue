const { Selector } = require("testcafe");

fixture `Test`
    .page `http://localhost:8080`;

test("test", async t => {
    await t.openWindow("http://localhost:8080")
    await t.click("button")
    await t.expect(Selector("div").innerText).eql("clicked")
    await t.switchToPreviousWindow();
    await t.expect(Selector("div").innerText).eql("received")
})