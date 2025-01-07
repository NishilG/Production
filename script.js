const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatLi = null;
let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;
const rag = `# MURCHBETTER DATABASE

## Overview
Murch Better is a creative merchandise brand specializing in thoughtful products and artist collaborations, founded to address the lack of satisfactory producers specializing in music merchandise. Our motto: Live Better. Be Better. Murch Better.

## 1. COMPANY INFORMATION
### Basic Details
* Founded: 2021
* Founders: Damini Bhatla and Mounima Chandrabhatla
* Location: Hyderabad, India
* Email: murchbetter@gmail.com
* Website: www.murchbetter.com
* Motto: Live Better. Be Better. Murch Better.

### Company Description
* Specialization: Designing, manufacturing, and launching merchandise for independent artists
* Origin: Created due to lack of satisfactory producers specializing in music merchandise
* Target Audience: Independent artists and general consumers

### Brand Values
* Inclusivity
* Authenticity
* Creativity
* Community-based acceptance
* Emotional connection

## 2. PRODUCT CATEGORIES

### A. Mindful 2025 Collection
#### Planners
* 2025 Mindful Planner - Digital
   * Price: Rs. 399.00
   * Link: https://murchbetter.com/products/2025-mindful-planner-plan-better-digital
* 2025 Mindful Planner - Physical Book
   * Regular Price: Rs. 1,499.00
   * Sale Price: Rs. 1,199.00
   * Link: https://murchbetter.com/products/2025-mindful-planner-plan-better-physical-book

#### Mindful Bundle
* Bundle Price:
   * Regular: Rs. 4,299.00
   * Sale: Rs. 3,799.00
   * Link: https://murchbetter.com/products/mindful-2025-gift-bundle
* Contents:
   * 2025 Planner
   * Soy wax candle
   * Sleep mask
   * Insulated water bottle
   * Finger massage ring
* Description: Thoughtfully curated gift set perfect for any occasion, offering a blend of relaxation and joy. Includes 5 premium self-care, bath and body products designed to pamper and rejuvenate.

### B. Clothing
#### T-Shirts
1. Paadum Nila T-shirt
   * Price: Rs. 899.00
   * Link: https://murchbetter.com/products/paadum-nila-t-shirt
2. Timeless SPB T-shirt
   * Price: Rs. 999.00
   * Link: https://murchbetter.com/products/timeless-spb-t-shirt
3. Navarasam T-shirt
   * Regular: Rs. 599.00
   * Sale: Rs. 499.00
   * Link: https://murchbetter.com/products/navarasam-t-shirt
4. Band Capricio Signature T-shirt
   * Price: Rs. 999.00
   * Link: https://murchbetter.com/products/band-capricio-signature-t-shirt

#### Hoodies
* Glow in the Dark Hoodie
   * Price: Rs. 1,699.00
   * Link: https://murchbetter.com/products/glow-in-the-dark-hoodie

### C. Accessories
1. AcuRing® - Finger Massage Ring
   * Price: Rs. 175.00
   * Link: https://murchbetter.com/products/acuring-finger-massage-ring
2. Cloud Eye Mask
   * Price: Rs. 599.00
   * Link: https://murchbetter.com/products/cloud-eye-mask-nap-better
3. Hydrate Better Water Bottle (1 Litre)
   * Regular: Rs. 1,599.00
   * Sale: Rs. 1,499.00
   * Link: https://murchbetter.com/products/hydrate-better-vacuum-insulated-stainless-steel-water-bottle-1-litre
   * Color: Peach

### D. Home Decor
#### Candles
* Pink Peony Soy Wax Candle - Zen Better
   * Regular: Rs. 499.00
   * Sale: Rs. 449.00
   * Link: https://murchbetter.com/products/pink-peony-soy-wax-candle-zen-better

#### Kitchenware
1. Soup Bowl - Color Sand
   * Price: Rs. 650.00
   * Link: https://murchbetter.com/products/soup-bowl-color-sand
2. Tumblers
   * Forest Green: Rs. 600.00 (Sold Out)
     * Link: https://murchbetter.com/products/tummy-tier-tumblers-forest-green
   * Mustard Yellow: Rs. 600.00
     * Link: https://murchbetter.com/products/tummy-tier-tumblers-mustard-yellow
   * Color Sand: Rs. 500.00
     * Link: https://murchbetter.com/products/tummy-tier-tumblers-color-sand
   * Algae Green: From Rs. 550.00 (Sold Out)
     * Link: https://murchbetter.com/products/tummy-tier-tumblers-algae-green
   * Love Tumblers - Color Sand: Rs. 600.00 (Sold Out)
     * Link: https://murchbetter.com/products/love-tumblers-color-sand
3. Pan Asian Set
   * Price: Rs. 1,800.00
   * Link: https://murchbetter.com/products/pan-asian-set
4. Coffee Mugs Set (2 pieces)
   * Price: Rs. 1,200.00 (Sold Out)
   * Link: https://murchbetter.com/products/coffee-mugs-set-of-2-mustard-yellow
   * Color: Mustard Yellow

### E. Stationery & Bags
#### Notebooks
1. SPB Lives On Notebook
   * Price: Rs. 299.00
   * Link: https://murchbetter.com/products/spb-lives-on-notebook
2. Capricio Journal
   * Price: Rs. 249.00
   * Link: https://murchbetter.com/products/capricio-journal

#### Tote Bags
1. Midnight Bag
   * Regular: Rs. 599.00
   * Sale: Rs. 449.00
   * Link: https://murchbetter.com/products/midnight-bag
2. Scan and Stream Tote
   * Price: Rs. 399.00
   * Link: https://murchbetter.com/products/scan-and-stream-tote
3. Capricio Tote
   * Price: Rs. 299.00
   * Link: https://murchbetter.com/products/capricio-tote

## 3. COLLECTIONS
### Artist Collections
1. SPB Lives On Collection
   * Official Dr. Sri SP Balasubramanyam collection
   * Products: Books, cotton tote bags, graphic T-shirts
   * Link: https://murchbetter.com/collections/spb-lives-on
2. Band Capricio Merchandise
   * Products: T-Shirts, Journals, Tote Bags, Glow in the Dark Hoodie
   * Description: Official merchandise of Band Capricio
   * Link: https://murchbetter.com/collections/band-capricio-merchandise
3. Shalmali Kholgade Merchandise
   * Products: Premium Cotton T-Shirts (Bio-washed)
   * Colors: Rusty Red, Lilac, Black
   * Sizes: XS-XXXL
4. SruthiRanjani Collection

### Price-Based Collections
1. Under 599
   * Link: https://murchbetter.com/collections/under-599
2. Under 999
   * Link: https://murchbetter.com/collections/under-1000
3. Under 1000
   * Link: https://murchbetter.com/collections/under-1000

## 4. CURRENT PROMOTIONS
* FREE Shipping across India
* 20% discount code: 'Merry20' (Valid on Christmas Day)
* COD Available
* 2025 PLANNERS - SELLING FAST!

## 5. CUSTOMER CARE
### Policies
* Shipping Policy
* Return and Refund Policy
* Privacy Policy
* Terms of Service
* FAQs

### Contact Information
* Email: murchbetter@gmail.com
* Social Media:
   * Facebook
   * Pinterest
   * Instagram
   * YouTube

## 6. BUSINESS SERVICES
### For Artists & Businesses
* Custom merchandise creation
* One-stop shop for merchandising solutions
* Contact: murchbetter@gmail.com
* Note: Successfully collaborated with various artists including Shalmali Kholgade, Band Capricio, SruthiRanjani and expanding

## 7. CONTENT
### Blog Highlights
* **Mindful 2025: Your Ultimate Self-Care & Gift Guide**
   * Published: November 28, 2024
   * Author: Mounima - Co-Founder, Murch Better
   * Summary: Tips for a mindful 2025 featuring the collection's key products
   * Hashtag: #MurchBetterMindfulBundle2025

### Website Sections
* Shop
* Blog
* About
* Collections
* Customer Care
* Careers
* For Artists & Businesses

## 8. FUTURE PLANS
* Expanding merchandise offerings
* Enhancing collaborations with artists
* Launching new categories for followers
* Creating exciting ideas & plans for beloved followers
* Belief statement: The world is filled with limitless opportunities!

## 9. FOUNDER'S NOTE
With Murch Better, we are excited to proudly reflect our values of inclusivity, authenticity and creativity. We have always been driven by our community based on acceptance and emotional connection with you all. Extremely humbled by your presence and support as always.

Looking forward to creating more reasons for why you love our products and why WE LOVE YOU.

With love and gratitude,
Damini & Mounima

## 10. INSPIRATIONAL QUOTE
Every woman's success should be an inspiration to another. We're strongest when we cheer each other on - Serena Williams
`;
const url = "https://api.groq.com/openai/v1/chat/completions";
const apiKey = "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"; // Replace with your actual API key

async function sendRequest(messageContent) {
    const payload = {
        model: "llama-3.2-3b-preview",
        messages: [
            {
                role: "user",
                content: messageContent
            },
            {
                "role": "system",
                "content": rag
            },
        ]
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error:", error);
    }
}

// Example usage: Call the function with custom content



const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (chatElement,userMessage) => {
    const messageElement = chatElement.querySelector("p");

    (async () => {
        try {
            const result = await sendRequest(userMessage);
            messageElement.textContent = result.choices[0].message.content;
        } catch (error) {
            console.error("Request failed:", error);
        }
    })();
    

    chatbox.scrollTo(0, chatbox.scrollHeight);
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi,userMessage);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
