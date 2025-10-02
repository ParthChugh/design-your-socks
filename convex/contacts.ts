import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    source: v.string(),
  },
  handler: async (ctx, args) => {
    // Store in database
    const contactId = await ctx.db.insert("contacts", {
      ...args,
      status: "new",
    });

    // Send email notification via Resend
    try {
      await resend.emails.send({
        from: 'DesignYourSocks <noreply@designyoursocks.com>',
        to: ['info@designyoursocks.com'],
        subject: `New Contact Form Submission from ${args.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${args.name}</p>
          <p><strong>Email:</strong> ${args.email}</p>
          ${args.company ? `<p><strong>Company:</strong> ${args.company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${args.message.replace(/\n/g, '<br>')}</p>
          <p><strong>Source:</strong> ${args.source}</p>
        `,
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      // Don't throw error - we still want to save the contact even if email fails
    }

    return contactId;
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
    // Store in database
    const quoteId = await ctx.db.insert("quotes", {
      ...args,
      status: "new",
    });

    // Send email notification via Resend
    try {
      await resend.emails.send({
        from: 'DesignYourSocks <noreply@designyoursocks.com>',
        to: ['info@designyoursocks.com'],
        subject: `New Quote Request from ${args.name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${args.name}</p>
          <p><strong>Email:</strong> ${args.email}</p>
          ${args.company ? `<p><strong>Company:</strong> ${args.company}</p>` : ''}
          <p><strong>Project Type:</strong> ${args.projectType}</p>
          <p><strong>Quantity:</strong> ${args.quantity}</p>
          <p><strong>Timeline:</strong> ${args.timeline}</p>
          <p><strong>Budget:</strong> ${args.budget}</p>
          <p><strong>Description:</strong></p>
          <p>${args.description.replace(/\n/g, '<br>')}</p>
        `,
      });
    } catch (error) {
      console.error('Failed to send quote email:', error);
      // Don't throw error - we still want to save the quote even if email fails
    }

    return quoteId;
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