/**
 * Blog post manifest.
 * Add new posts here. Content uses plain text with \n for paragraph breaks.
 * For richer formatting, switch to a markdown parser later.
 */
export const BLOG_POSTS = [
    {
        slug: 'what-is-the-ai-adoption-gap',
        title: 'What Is the AI Adoption Gap?',
        excerpt: "Anthropic's data shows a 65-point gap between what AI can do and what companies use it for. Here's what that means for your business.",
        date: '2026-03-10',
        category: 'AI Adoption Gap',
        readTime: '6 min read',
        content: [
            "Anthropic's latest research reveals a striking number: there's a 65-point gap between what AI can do and what companies actually use it for. This isn't a technology problem. It's a systems design problem.",
            "Think about it like the electricity revolution. By 1900, electricity had been available for twenty years. Less than 5% of factories used it. Not because it didn't work. Because they kept the old layout and just swapped steam for electricity. The productivity explosion came when they redesigned the factory floor around the new technology.",
            "AI is the exact same story. The tools work. The implementations don't.",
            "## Where the Gap Lives",
            "The gap shows up in five predictable ways:",
            "**Pilot Purgatory.** Two-thirds of companies are stuck here. Five AI experiments running, none in production. No clear criteria for what success looks like.",
            "**Tool Sprawl.** Your team has ChatGPT, Copilot, three automation tools, and an AI SDR. None of them talk to each other.",
            "**Shadow AI.** 78% of employees are already using AI tools you didn't approve. 80% of companies have had AI-related data incidents.",
            "**Training That Doesn't Stick.** You ran the workshop. A month later, only 13% use AI with real confidence.",
            "**The Intensification Trap.** AI makes your team faster, so the company demands more output instead of better output. Burnout rises.",
            "## How to Close It",
            "Closing the gap requires a systems approach, not a tools approach. That means:",
            "1. **Map** where AI creates real value vs. where it's just expensive noise",
            "2. **Design** the architecture before buying more tools",
            "3. **Build** with your team so they own the system",
            "4. **Train** for fluency, not just literacy",
            "5. **Hand over** everything so the system runs without the person who built it",
            "This is what I call The Gap Method. It takes 8-12 weeks. You own everything when I leave.",
            "The companies that close this gap first win the next five years. The gap is a compounding disadvantage. Every month you spend in pilot purgatory is a month your competitors are building real systems.",
        ],
    },
]

export const BLOG_CATEGORIES = ['AI Adoption Gap', 'Growth Systems', "Practitioner's Journal"]

export function getPostBySlug(slug) {
    return BLOG_POSTS.find(p => p.slug === slug)
}

export function getPostsByCategory(category) {
    if (!category) return BLOG_POSTS
    return BLOG_POSTS.filter(p => p.category === category)
}
