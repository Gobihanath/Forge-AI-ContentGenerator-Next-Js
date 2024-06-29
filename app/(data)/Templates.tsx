export default [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points only based on the given niche & outline topic and give me the result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO',
        desc: 'An AI tool that generates SEO-friendly titles, descriptions, and tags for YouTube videos',
        category: 'YouTube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate SEO-friendly titles, descriptions, and tags for YouTube videos based on the given video topic and keywords',
        slug: 'youtube-seo',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Tags',
        desc: 'An AI tool that generates relevant and trending hashtags for Instagram posts',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/733/733558.png',
        aiPrompt: 'Generate relevant and trending hashtags for Instagram posts based on the given post description',
        slug: 'instagram-tags',
        form: [
            {
                label: 'Enter post description',
                field: 'textarea',
                name: 'description',
                required: true
            }
        ]
    },
    {
        name: 'English Grammar Checker',
        desc: 'An AI tool that checks and corrects English grammar in text',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        aiPrompt: 'Check and correct the English grammar in the given text',
        slug: 'english-grammar-checker',
        form: [
            {
                label: 'Enter text',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Code Generator',
        desc: 'An AI tool that generates code snippets based on a given problem statement',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055687.png',
        aiPrompt: 'Generate a code snippet based on the given problem statement',
        slug: 'code-generator',
        form: [
            {
                label: 'Enter problem statement',
                field: 'textarea',
                name: 'problem',
                required: true
            }
        ]
    },
    {
        name: 'Code Explanation',
        desc: 'An AI tool that explains code snippets in plain English',
        category: 'Programming',
        icon: 'https://cdn-icons-png.flaticon.com/128/3163/3163287.png',
        aiPrompt: 'Explain the following code snippet in plain English',
        slug: 'code-explanation',
        form: [
            {
                label: 'Enter code snippet',
                field: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Post Ideas',
        desc: 'An AI tool that generates creative social media post ideas based on a given topic',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate 5 creative social media post ideas based on the given topic',
        slug: 'social-media-post-ideas',
        form: [
            {
                label: 'Enter topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Product Descriptions',
        desc: 'An AI tool that generates compelling product descriptions based on product details',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/609/609060.png',
        aiPrompt: 'Generate a compelling product description based on the given product details',
        slug: 'product-descriptions',
        form: [
            {
                label: 'Enter product details',
                field: 'textarea',
                name: 'details',
                required: true
            }
        ]
    },
    {
        name: 'Ad Copy Generator',
        desc: 'An AI tool that creates engaging ad copy based on the target audience and product features',
        category: 'Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2910/2910768.png',
        aiPrompt: 'Create an engaging ad copy based on the given target audience and product features',
        slug: 'ad-copy-generator',
        form: [
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'Resume Builder',
        desc: 'An AI tool that helps build professional resumes based on user input',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135789.png',
        aiPrompt: 'Build a professional resume based on the given user information',
        slug: 'resume-builder',
        form: [
            {
                label: 'Enter your information',
                field: 'textarea',
                name: 'information',
                required: true
            }
        ]
    },
    {
        name: 'Cover Letter Generator',
        desc: 'An AI tool that generates personalized cover letters for job applications',
        category: 'Career',
        icon: 'https://cdn-icons-png.flaticon.com/128/1087/1087840.png',
        aiPrompt: 'Generate a personalized cover letter for a job application based on the given user information and job description',
        slug: 'cover-letter-generator',
        form: [
            {
                label: 'Enter user information',
                field: 'textarea',
                name: 'userInfo',
                required: true
            },
            {
                label: 'Enter job description',
                field: 'textarea',
                name: 'jobDesc',
                required: true
            }
        ]
    },
    {
        name: 'Headline Generator',
        desc: 'An AI tool that creates catchy headlines for articles and blog posts',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1107/1107933.png',
        aiPrompt: 'Create 5 catchy headlines for an article or blog post based on the given topic',
        slug: 'headline-generator',
        form: [
            {
                label: 'Enter topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Email Template Generator',
        desc: 'An AI tool that generates professional email templates for various purposes',
        category: 'Communication',
        icon: 'https://cdn-icons-png.flaticon.com/128/888/888853.png',
        aiPrompt: 'Generate a professional email template for the given purpose and recipient information',
        slug: 'email-template-generator',
        form: [
            {
                label: 'Enter email purpose',
                field: 'input',
                name: 'purpose',
                required: true
            },
            {
                label: 'Enter recipient information',
                field: 'textarea',
                name: 'recipientInfo',
                required: true
            }
        ]
    },
    {
        name: 'Job Description Generator',
        desc: 'An AI tool that creates detailed job descriptions based on job roles and responsibilities',
        category: 'HR',
        icon: 'https://cdn-icons-png.flaticon.com/128/2272/2272580.png',
        aiPrompt: 'Create a detailed job description based on the given job role and responsibilities',
        slug: 'job-description-generator',
        form: [
            {
                label: 'Enter job role',
                field: 'input',
                name: 'role',
                required: true
            },
            {
                label: 'Enter job responsibilities',
                field: 'textarea',
                name: 'responsibilities',
                required: true
            }
        ]
    },
    {
        name: 'Story Plot Generator',
        desc: 'An AI tool that generates creative story plots based on a given theme or genre',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2641/2641571.png',
        aiPrompt: 'Generate a creative story plot based on the given theme or genre',
        slug: 'story-plot-generator',
        form: [
            {
                label: 'Enter theme or genre',
                field: 'input',
                name: 'theme',
                required: true
            }
        ]
    },
    {
        name: 'Recipe Generator',
        desc: 'An AI tool that creates detailed recipes based on given ingredients',
        category: 'Cooking',
        icon: 'https://cdn-icons-png.flaticon.com/128/3144/3144515.png',
        aiPrompt: 'Create a detailed recipe based on the given ingredients',
        slug: 'recipe-generator',
        form: [
            {
                label: 'Enter ingredients',
                field: 'textarea',
                name: 'ingredients',
                required: true
            }
        ]
    },
    
];
