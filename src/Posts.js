import lmao from './assets/lmao.gif';
export const posts = [
    {
        title: "Hi there!",
        slug: "hi-there",
        date: "2025-10-25",
        description:
            "First post!",
        content: `
            Hello world!
        `,
    },
    {
        title: "Test Post 2",
        slug: "test-post-2",
        date: "2025-10-26",
        description:
            "Second post!",
        content: `
            Test again!
        `,
    },
    {
        title: "Test Post 3",
        slug: "test-post-3",
        date: "2025-10-26",
        description:
            "Third post!",
        content: `
            <p>Test again! But this time with some <strong>HTML content</strong></p>
            <img src="${lmao}"/>
        `,
    },
    {
        title: "Test Post 4",
        slug: "test-post-4",
        date: "2025-10-26",
        description:
            "Second post!",
        content: `
            Test again!
        `,
    },  
];