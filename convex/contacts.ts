import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("contacts", {
      ...args,
      status: "new",
    });
  },
});

export const submitQuote = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    projectType: v.string(),
    quantity: v.string(),
    timeline: v.string(),
    budget: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("quotes", {
      ...args,
      status: "new",
    });
  },
});

export const subscribeNewsletter = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existing = await ctx.db
      .query("newsletters")
      .filter((q) => q.eq(q.field("email"), args.email))
      .unique();
    
    if (existing) {
      if (!existing.subscribed) {
        await ctx.db.patch(existing._id, { subscribed: true });
      }
      return existing._id;
    }
    
    return await ctx.db.insert("newsletters", {
      email: args.email,
      subscribed: true,
    });
  },
});

export const getContacts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("contacts")
      .order("desc")
      .collect();
  },
});

export const getQuotes = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("quotes")
      .order("desc")
      .collect();
  },
});