import test from "ava"
import slugify from "."

test("main", (t) => {
    t.is(slugify("�😀"), "grinning-face")
})
