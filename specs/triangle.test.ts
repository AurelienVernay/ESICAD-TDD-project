import { describe, expect, test, beforeEach } from "@jest/globals";
import { Point } from "~/shapes/point";
import { Triangle } from "~/shapes/triangle";


describe("class Triangle", () => {
    let triangle: Triangle;

    beforeEach(() => {
        triangle = new Triangle(new Point(0, 0), new Point(0, 1), new Point(1, 0),);
    })

    test("perimeter should be 2 + sqrt2", () => {
        expect(triangle.getPerimetre()).toBe(2 + Math.sqrt(2))
    })
});