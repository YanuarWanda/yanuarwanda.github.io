import { expect, test } from "vitest";
import { isActive } from "@/utils/navigation";

test("isActive returns true for exact match", () => {
  expect(isActive("/about", "/about")).toBe(true);
});

test("isActive returns true for root path", () => {
  expect(isActive("/", "/")).toBe(true);
  expect(isActive("/", "/index.html")).toBe(true);
});

test("isActive returns true for sub-path", () => {
  expect(isActive("/projects", "/projects/auctioneer")).toBe(true);
});

test("isActive returns true for .html extension", () => {
  expect(isActive("/about", "/about.html")).toBe(true);
});

test("isActive returns true for sub-path with index.html", () => {
  expect(isActive("/projects", "/projects/index.html")).toBe(true);
});

test("isActive returns false for non-matching path", () => {
  expect(isActive("/about", "/contact")).toBe(false);
});

test("isActive returns false for partial match that is not a sub-path", () => {
  expect(isActive("/about", "/about-us")).toBe(false);
});
