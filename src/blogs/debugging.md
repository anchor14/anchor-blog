## Intro
I am reading [Principles by Ray Dalio](https://www.principles.com/), and the first part covers life principles. While I was reading, I started connecting the dots in my head with lessons from my life. Steve Jobs had a much higher level of intuition and capabilities at this - [link to his commencement speech](https://youtu.be/UF8uR6Z6KLc?feature=shared&t=55).

I believe everything in this world is some form of entity - similar to an object in the world of object oriented programming. And each entity runs on its own system, with a collection of rules, state management, constraints, etc. I will not go into the details of this Entity >< System mapping of this world because I don't have a clear mental model of this yet. Once I do, this should probably be a writing on its own.

There are countless systems in this world, but just as Ray Dalio says in his book, 

> With time and experience, I came to see each encounter as “another one of those” that I could approach more calmly and analytically, like a biologist might approach an encounter with a threatening creature in the jungle: first identifying its species and then, drawing on his prior knowledge about its expected behaviors, reacting appropriately.

these systems can be broken down into a handful. When I look at *systems*, I try to create a graph in my head as a mental model. There is a root node, which points to other children nodes which are basically subclasses of that node.

<img src="https://res.cloudinary.com/dfmfevihi/image/upload/v1713130296/system.png" alt="system" width="300">

And because all systems all originate from a handful, there is a lot of overlap between these different variations, and you can start using the lessons from one system to another.

This is beautiful and exciting.

I always find it easier to understand concepts and ideas through a specific example - bottom up approach - so let's look at a specific example from Principles.

There is this 5-step process discussed in the book.

> **5-Step process to getting what you want out of life:**  
> 
> 1. Setting clear goals  
> 2. Identifying and not tolerating problems challenging your system to reach your goals  
> 3. Diagnosing the problem’s root cause  
> 4. Designing a detailed plan with solutions to fix the problem  
> 5. Doing the tasks set forward in the plan  
>   
> How often you take the cycle will dictate how fast you and your machine improves.  
> **Values → 1) Goals → 2) Problems → 3) Diagnoses → 4) Designs → 5) Tasks**

When I read this, something rang a bell in my head. Then I realised - this is similar to my workflow when I debug code.

1. Pick a bug you want to fix.
2. Identify the issues, bugs, defects, room for improvement with the code.
3. Identify the root cause of the bug.
4. Come up with a plan of how to fix the bug.
5. Execute the fix, refactoring, monitoring, etc.

We are all running on some form of system. Just like Linux, human brains are a form of software, written by nature, in genetic code. Nature is better than any engineer I know, but still not perfect. All software have room for improvement, and so do we. Because software and human brains have similarities, the approach to improve software can be applied to improving yourself.

In the next section, I will go over my debugging workflow, then I will move on to how I can apply this workflow to debug myself for improvement.

-----------------------

## How I debug

#### Pick a bug
I think this is an important step. Just like life goals, you never have enough time to fix all the bugs in the world, or even in your codebase. So you have to choose a bug. Even if you have the determination and capabilities to fix all bugs, this does not mean you can fix all of them.

Again, as Ray Dalio put in better words,
> I learned that if you work hard and creatively, you can have just about anything you want, but not everything you want.

So when I have some time in my hand, the criteria I use to choose the bugs are
- Impact
- Curiosity
- Time constraints

I will briefly describe why each of them are important.

Many people think impact only in terms visibility to leverage for promo, but impact is also a good proxy for the amount of smart people are working in that area. Think of AI and LLMs in 2025. And exposure to smart people is one of the best ways to grow.

Curiosity is a magical proxy that often leads you to nice places. Not always, but if you always put curiosity in the formula, I believe it is a net plus in choosing where to spend time in your life. Curiosity for me often positively correlates to difficulty. This means I will also be pushing myself to more difficult problems.

Time constraint is another one. It is important to get things done. Not just started. A good chunk of work in this world gets initiated but never completed. Completing things you began consistently is a super power. Usually the last 20% of the task is 80% of the work, which could also mean 80% of the learning is towards the tail end of the work.

#### Read the code
I spend a long time reading code, documentation, logs, etc.

It's easy to get pulled into execution, as that feels like real work. But planning is a crucial part to get things done with high quality. And to have a good plan, you need a clear mental model of what problem you are tackling.

So I read the code with all resources I have - myself, AI agents, online documentation, etc. And I build a clear mental model of what this code does. I write these down on my Obsidian local notes with filepath, brief notes, the call stack, etc. This shows a high level dependency graph of the different code files that are related to the part I am trying to fix.

Any system has a so called state. Doctors run MRI exams, CT scans to understand the system of your body. And I have to examine the code from many angles to understand it properly. The brain constantly tries to trick you that you know more than you actually do. [And you have to make extra effort to get to a good place](https://www.goodreads.com/quotes/11368901-knowledge-isn-t-free-you-have-to-pay-attention).

Once I have a clear mental model of what is happening, it will naturally point you towards what I have to do to fix the bug.

#### Diagnosing the problem’s root cause

If the previous step built you a map. Now you have to figure out where you start.

A lot of problems in code often have the same parent. Just like a cold is the root cause for many symptoms - fever, coughing, lack of energy, etc. If you think of each of them as a separate problem, you lead to over-complication. Same thing with software.

Many bugs come from the same parent. So when you fix one bug, you see others go away. You optimize the performance of one part of the system, and other parts of the system start being faster as well.  So it is valuable to find the root cause of a group of bugs. This should be doable with the mental model in the previous step. If you are not sure what the root cause of your bug is, iterate again on the previous step.

#### Come up with a plan of how to fix the bug
Now that you know where you are and where you want to get to, you have to draw the path.

Remember when you were young, and there was no navigation apps so you had to read a map and try to figure out what is the best path to get there? Same thing with software. You should have all the resources in front of you, but now you have to decide how to get to the destination.

Again there are multiple ways to do this. One perpsective is quality vs. speed. Fixing the bug is a sub-problem of improving the code. You could also improve the readability, optimise the performance, and do a million other things to improve the code while you are fixing the bug.

One advantage here is that you have the clear mental model in your memory, so most of these improvements are on sale with a discount rate. You don't have to buy something just because it is on discount, but if you will have to buy it soon, might as well buy it now.

So the path you take will depend. If there is a major incident, you probably want the shortest path. If you have some time at hand, you probably want to take the more elegant path, just like you would take a more pleasing path by the canal on your morning walk if you have enough time.

#### Execute the fix and put in monitoring

Now you have to fix the code. You need to have the determination, consistency, and smart peers to review your approach. If you get stuck, iterate on the previous steps.

One important step is to put in the right monitoring tools. You have to check that the solution you put in works with consistency, and did not cause other issues. This is an easy step to skip, and I believe this is why so many people fall back to bad habits again and so much software is not properly fixed. 

Without consistency, the solution does not quality. And to ensure consistency, you need a certain form of monitoring tool. In code, we use logs, tracing, alerts, monitoring, etc. There are again a million ways you can do this to reach the end goal of - assurance of the consistency of your fix.

So that's how I fix code. Now let's see how we can transform this to how I can improve my bad habit - which is a bug in the software I run on.

-----------------------

## Debugging myself

First we need to pick a bug. Let's choose a straightforward one. I need to sleep on time. My ideal sleep time is around 9:45 p.m. - 10 p.m, including weekends, and I fail to keep this rule way too often. So the clear goal is to consistently go to bed on time, and keep myself accountable.

1. Setting clear goals -> go to bed on time.
2. Identifying and not tolerating problems challenging your system to reach your goals -> keep myself accountable.
3. Diagnosing the problem’s root cause -> lack of discipline and the absence of accountability for sleeping late.
4. Designing a detailed plan with solutions to fix the problem -> track when I sleep and record why I messed up.
5. Doing the tasks set forward in the plan -> Sleep early.

Above is a rough map of what I need to try. I have not tried something this systematic to fix a bad habit of myself. I know that I already have done this with software, many times. I think my brain has enough similarities to software for me to take a similar approach.

The part I am still a bit lost on is how to monitor myself. I don't have all the sophisticated tools that exist like [Kibana](https://www.elastic.co/kibana), [Datadog](https://www.datadoghq.com/), [Sentry](https://sentry.io/welcome/) for myself. But I feel like that's an over-complication. Smart, disciplined people have achieved great things by consistently keeping their life in routine. The root cause is clear, and if I don't sleep early, the symptoms are already known. I don't feel as energetic, my head is not clear enough, I make bad decisions, and it's a vicious cycle from there.

I am not sure that sleeping on time consistently would help me achieve the things I want to lead myself to the life I aspire. But I know for sure that if I don't do this small thing consistently, I will not. So this is an important bug in my system that I have to debug and fix.

I'll try the above approach and write a follow-up to this one.
