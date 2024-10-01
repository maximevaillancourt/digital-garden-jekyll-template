---
last_modified_at: 
permalink: aiprojects
description: In this article, I discuss my almost failed attempt to get AI to extract data from a session I did with about 280 educators in Arizona last week. AI still really struggles doing very specific things, especially at a high level. Surprisingly, Google's NotebookLM was the best one.
title: AI Can do Anything, But Not Something Specific
image: /assets/ailogos.jpeg
published: "true"
sitemap: "true"
excerpt_separator: <!--more-->
category: 
tags:
  - ai
date: 2024-09-30
layout: post
---
Twitter Version: AI still really struggles doing very specific things, especially at a high level. Surprisingly, Google's NotebookLM was the best one. 

{% if page.image %} <img src="{{ page.image }}" alt=""> {% endif %}
Last week, I was in Arizona, at Buckeye Union High School District talking about using AI in schools. I used my favorite tool, SchoolAI, to ask them some followup questions after they spent time utilizing AI. 

Now, being that I am not a data scientist or programmer myself, I only have rudimentary ways of interacting with the AI tools that are out there. I'm not doing API calls or using JSON to break down all my data. 

I just have what I can understand and work with. I'm tech savvy, but I'm not coder. 

What follows is how I attempted to manage this 286 page document. 

First, I started with ChatGPT, and asked it to review my 286 page document and find all the different projects in there and who created them. Well, that didn't work too well, because when SchoolAI exports a space conversation, it exports it as a CSV, with the columns as follows: 

```
|**student_name**|student_id|student_session_id|created_at|updated_at|messages|sentiment|summary|insights|
```
The "messages" column becomes unwieldy quite quickly because the message is the entire conversation with the student and AI: 

```
assistant: Hey there! 🎉 Ready to dive into creating your own AI project today? Let's start by thinking about what kind of project you might want to build. Here are a few questions to get those creative gears turning:

1. What interests you the most about AI? Is it robots, smart apps, or something else?

2. Do you have any cool ideas for a project that uses AI?

3. What problem would you like your AI project to solve or explore?

4. Who do you imagine would use your AI project? 

5. What kind of tools or resources do you think you'll need to get started?
  
Let's chat about these and get ready to create something awesome! 🚀  

user: I think that the way that this can help students expand upon their own ideas to take projects further is exciting  

assistant: That's awesome to hear! AI can definitely help take ideas to the next level. Let's explore how you might use AI to expand your project:

  

1. **Which subject or topic are you most excited to explore with AI?**

2. **How do you think AI can add value to your idea or project?**

3. **What new features or possibilities would you like AI to bring to your project?**

4. **How could AI make your project more interactive or engaging for users?**

5. **What challenges do you think you might face, and how could AI help overcome them?**

  

These questions can help you shape your project into something truly unique. Let's brainstorm together! 🌟  

user: 4. I think that this will allow students to better engage with projects they may not enjoy  

assistant: That sounds like a great idea! Creating an AI project to help students engage with topics they find less interesting could be really impactful. Let's think about these next steps:

  

- **What type of AI technology could make learning more engaging?** (e.g., chatbots, interactive simulations)

- **How would the AI interact with students?**

  

What are your thoughts on these?  

user: I think that allowing chat bots like this to help foil ideas or even image generators to help create logos or other images to help show what they are thinking can truly help  

assistant: Awesome! 🎨 Chatbots and image generators can definitely make learning more interactive and creative. 

  

- **For chatbots**: What kind of questions or tasks do you think the chatbot could help students with?

- **For image generators**: What types of images or designs would be most useful for students to create?

  

Let's explore these ideas further!  

user: For image generators I think that it could help students create brand logos for personal portfolios  

assistant: That's a fantastic idea! Creating brand logos can really help students personalize their projects and express their creativity. 

  

- **For the AI**: How do you think it could guide students in designing their logos?

- **For students**: What elements should they consider when making a logo (like colors or symbols)?

  

These can be fun and important steps in your project!  

user: AI can help those who are wanting something specific to get that exact image, whereas for those need a place to start can generate things quickly and easily  

assistant: Exactly! AI can tailor designs for those with specific ideas and offer inspiration to those who are just getting started. 

  

- **Next Step**: How could you train or set up the AI to recognize different styles and preferences?

- **Consideration**: What features would make the tool easy and fun for students to use?

  

These will help make your project both effective and engaging!  

user: I am not sure, how could I train it to recognize different styles  

assistant: Great question! Training an AI to recognize styles involves a few key steps:

  

1. **Collect Data**: Gather a variety of images or logos that represent different styles.

2. **Label Data**: Organize these images by style categories (e.g., modern, vintage, minimalist).

3. **Use Machine Learning**: Employ algorithms that can learn from this data to identify patterns and styles.

4. **Test and Improve**: Continuously test the AI's ability to recognize styles and adjust based on feedback.

  

Does this help clarify things? Let me know if you want to dive deeper into any step!
```

Here's the other problem with that, the CSV export doesn't include the student's name in the messages column. So I created a new column, and added the formula 
```
=SUBSTITUTE(F1, "user", A1)
```
which substitutes the word anywhere in the column with whatever the student put in as their name. 

So then, I just copied that whole column F, and pasted it into a document to make it a PDF so it was a little better to work with. 

Once, I did that, I had a better way to tackle this for each one of these four tools: ChatGPT, Claude, Llama 3.2, and NotebookLM

## ChatGPT 
### I can handle anything, but I'll lie about everything
ChatGPT is all about I can anything for you! But then it makes stuff up so much. Here's my entire chat. It could handle the whole document, but it really struggled to not make stuff up, or repeat things. 

Interestingly, it just felt like it wasn't the right tool for the job the whole time I was using it. 

Final Rating: ⭐⭐☆☆☆
## Claude
### I have limits, but I got you!
Claude wouldn't let me upload the entire document, so I made a smaller document and it was able to do something more advanced that ChatGPT could not do. Remember that problem I had about the user's name being "user"? Well, Claude was able to readjust it and give me better data. That was pretty awesome. 

It actually took the CSV and split each line of the conversation into their own column. Pretty awesome. I think it would struggle, but then it told me how to do it myself using the tools that I am familiar with (BBEdit and TextSoap). 

[Here's the restructured data](https://claude.site/artifacts/1fe6f422-b279-4cde-a8e6-ae82cb1e5f0f) on a few rows, since Claude couldn't handle much data. It was nice that it restructured the CSV for me, and I can see how that would be beneficial going forward. 

Final Rating: ⭐⭐⭐☆☆
## Llama 3.2 
### I'm open source and on your computer, and after hours of fiddling, I might work.

This was my first time using Llama, and it was a fresh download. I've seen what other people have done and it has been impressive, so I know it is possible, but I just couldn't figure it out. Although it said it was viewing my PDF, it referred to it as an XML and then made up something about SUVs. That's not what it was about! 

![Llama fell down]({{ site.url }}/assets/llamahall.png)
Final Rating: ⭐☆☆☆☆
## NotebookLM
### I'll make a terrible podcast, but I'll actually do what you want and it will make sense the first time. 
Here's my [NotebookLM](https://notebooklm.google.com/notebook/3922364f-54c4-492e-9cd8-683a7f1b6dca) example. It actually did what I asked and is the list on [[buhsd|this page]]. It also made a [truly terrible podcast](https://notebooklm.google.com/notebook/3922364f-54c4-492e-9cd8-683a7f1b6dca/audio). Gross. Just gross. 

Surprisingly, this was one single prompt that I wrote for that one: 
```
Create a table of each persons project and whether they completed it or not.
```

Simple, easy, beautiful. First try. 

But it did a terrible job of saving the note once I left the chat interface. The beautiful table it gave me in the NotebookLM Chat response ended up completely useless in the saved note area: 

![difficult to read text with no structure]({{ site.url }}/assets/savedresponseugly.png)
Final Rating: ⭐⭐⭐⭐☆
Begrudgingly, this is the best response, because it did what I needed it to do on the first try. 

| AI Tool                    | Pros                                                                                                                          | Cons                                                                                                                                                                                                    | Final Rating |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| ChatGPT (Plus Version      | Could handle my giant document                                                                                                | Constantly made up projects. You just can't trust it won't hallucinate.                                                                                                                                 | ⭐⭐☆☆☆        |
| Claude (free version)      | Seemed like it did a better job understanding my queries with smaller dataset. Felt like the right environment for this task. | Couldn't handle my huge document, so could only test on a few entries at a time                                                                                                                         | ⭐⭐⭐☆☆        |
| Llama 3.2 (on my computer) | On my computer, so not going to other servers.                                                                                | Couldn't access the document at all, totally did not achieve the result.                                                                                                                                | ⭐☆☆☆☆        |
| NotebookLM (Google)        | Actually completed the challenge, gave me a list of all the projects.                                                         | Made a terrible podcast 🤷‍♂️ [Listen Here](https://notebooklm.google.com/notebook/3922364f-54c4-492e-9cd8-683a7f1b6dca/audio). Results, once removed from the chat, weren't formatted for ease of use. | ⭐⭐⭐⭐☆        |

Have a Good Life.