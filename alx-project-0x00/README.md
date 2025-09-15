# React Genesis: Mastering Next.js Setup

## **Project Description**
This is a Next.js-based project designed to teach the fundamentals of building modern web applications using **React**, **TypeScript**, and **Next.js**.  
The application mimics core features of Airbnb’s UI, including **property listings with images**, **ratings**, and **interactive components**, while emphasizing best practices in front-end development.

---

## **Learning Objectives**
- **Scaffold** a Next.js project with TypeScript  
- Understand **Next.js folder structure** and organization best practices  
- Implement **basic routing** in Next.js (Pages Router)  
- Create **reusable React components** with TypeScript  
- Work with **TypeScript interfaces** for component props  
- Manage **assets and static files** in Next.js  
- Develop an understanding of **component composition**  
- Implement **responsive design** with Tailwind CSS  
- Set up and configure **ESLint** for code quality  

---

## **Requirements**
- Node.js (v16 or later)  
- npm or yarn  
- Visual Studio Code (or any preferred IDE)  
- Next.js v13+  
- TypeScript  
- Tailwind CSS  
- ESLint  

---

## **Best Practices**

### **Project Structure**
- Components are organized in a dedicated `components` directory  
- TypeScript interfaces are centralized in an `interfaces` directory  
- Pages follow Next.js conventions in the `pages` directory  

### **Component Design**
- Components are typed with TypeScript interfaces  
- Reusable components accept **props** for customization  
- Components are **modular** and focused on single responsibilities  

### **Code Quality**
- ESLint is configured for code consistency  
- TypeScript provides **type safety**  
- Arrow function syntax is used consistently  

### **Styling**
- Tailwind CSS is used for **utility-first styling**  
- Responsive design principles are applied  
- Consistent **spacing**, **typography**, and **color schemes**  

### **Performance**
- Next.js Image component is used for **optimized images**  
- Code splitting is handled automatically by Next.js  
- Only necessary dependencies are included  

---

## **Tasks**

### **0. Scaffolding a Project**
- Learn how to create a Next.js project using CLI tools  
- Configure with **TypeScript**, **ESLint**, and **Tailwind CSS**  

---

### **1. Setting up Project Directories**
- Organize project directories for `components` and `interfaces`  
- Update the main page with initial **layout and styling**  

---

### **2. Basic Routing**
- Create additional pages  
- Understand Next.js **Pages Router** for navigation  

---

### **3. Rendering Components**
- Use React components to prevent **code repetition**  
- Leverage **reusable UI elements**  
- Organize **images** and other assets  

---

### **4. Using Components**
- Make components **reusable and dynamic**  
- Pass props to render multiple instances with different content  

---

### **5. Typing Functional Components**
- Use TypeScript interfaces to **type functional components**  
- Ensure proper props are passed and maintain **type safety**  

---

### **6. Advanced Task**
- Create a **Button component** accepting `title` and `styles` as props  
- Render multiple button instances with different:  
  - **Sizes**: `small`, `medium`, `large`  
  - **Shapes**: `rounded-sm`, `rounded-md`, `rounded-full`  
- Display them on the `/landing` page  
