import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    source: v.string(), // "contact", "quote", "newsletter"
    status: v.string(), // "new", "contacted", "converted"
  }).index("by_status", ["status"])
    .index("by_source", ["source"]),

  quotes: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    projectType: v.string(), // "design_only", "design_production", "full_service"
    quantity: v.string(),
    timeline: v.string(),
    budget: v.string(),
    description: v.string(),
    status: v.string(), // "new", "quoted", "accepted", "completed"
  }).index("by_status", ["status"]),

  newsletters: defineTable({
    email: v.string(),
    subscribed: v.boolean(),
  }).index("by_subscribed", ["subscribed"]),
});