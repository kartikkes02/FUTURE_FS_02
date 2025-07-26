// // filepath: f:\WEB DEV\FUTURE_INTERNS_INTERNSHIP\Portfolio\portfolio\src\components\ContactSection.tsx
// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
// import React, { useState, FormEvent } from "react";

// const TwitterXIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M21.542 2H18.9l-5.383 6.977L7.508 2H2l7.823 10.37L2 22h3.641l5.74-7.445L16.492 22H22l-8.087-10.72L21.542 2z" />
//   </svg>
// );

// const ThreadsIcon = () => (
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     fill="none" 
//     viewBox="0 0 24 25" 
//     className="w-7 h-6" 
//     aria-hidden="true"
//   >
//     <path 
//       fill="currentColor" 
//       d="M16.906 12.001a7 7 0 0 0-.269-.122c-.158-2.915-1.75-4.584-4.424-4.602h-.036c-1.6 0-2.93.683-3.749 1.926l1.47 1.01c.612-.929 1.572-1.127 2.28-1.127h.024c.88.006 1.544.262 1.975.761q.47.548.625 1.5a11.3 11.3 0 0 0-2.527-.121c-2.542.146-4.177 1.63-4.067 3.69.056 1.046.576 1.945 1.466 2.533.752.497 1.72.74 2.728.685 1.33-.073 2.372-.58 3.1-1.509.553-.704.902-1.617 1.057-2.768.633.382 1.103.886 1.362 1.49.441 1.03.467 2.72-.912 4.098-1.208 1.208-2.66 1.73-4.855 1.746-2.434-.018-4.275-.799-5.472-2.321-1.121-1.426-1.7-3.485-1.722-6.12.021-2.635.6-4.694 1.722-6.12 1.197-1.522 3.038-2.303 5.472-2.32 2.452.018 4.326.803 5.568 2.332.61.75 1.07 1.694 1.372 2.794l1.723-.46c-.367-1.354-.944-2.52-1.73-3.488C17.492 3.526 15.163 2.52 12.16 2.5h-.012c-2.996.02-5.3 1.03-6.849 2.998-1.377 1.752-2.088 4.19-2.111 7.245v.014c.023 3.056.734 5.493 2.111 7.245 1.548 1.969 3.853 2.977 6.85 2.998h.011c2.664-.018 4.542-.716 6.089-2.262 2.024-2.023 1.963-4.559 1.296-6.115-.479-1.116-1.391-2.023-2.639-2.622m-4.6 4.327c-1.114.062-2.271-.438-2.328-1.51-.043-.794.565-1.68 2.397-1.787q.315-.018.618-.018c.665 0 1.288.065 1.854.189-.211 2.637-1.45 3.066-2.54 3.126Z"
//     />
//   </svg>
// );

// export const ContactSection: React.FC = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formData = new FormData(e.currentTarget);
//     formData.append("access_key", "e3dec39f-2f24-4a4c-8c6d-b41adc4eb404");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       e.currentTarget.reset();
//     } else {
//       toast({
//         title: "Something went wrong",
//         description: data.message || "Please try again later.",
//         variant: "destructive",
//       });
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary"> Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               Contact Information
//             </h3>

//             <div className="space-y-6 justify-center">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <a
//                     href="mailto:kartikeyakesarwani@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     kartikeyakesarwani@gmail.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <a
//                     href="tel:+911234567890"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +91 1234567890
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <span className="text-muted-foreground">
//                     Prayagraj, India
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8">
//               <h4 className="font-medium mb-4">Connect With Me</h4>
//               <div className="flex space-x-4 justify-center">
//                 <a
//                   href="https://www.linkedin.com/in/kartikeya-kesarwani-7a5b03293/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin />
//                 </a>
//                 <a href="https://x.com/KARTIKEYAKES08" target="_blank" rel="noopener noreferrer">
//                   <TwitterXIcon />
//                 </a>
//                 <a href="https://www.instagram.com/kartikkes02/" target="_blank" rel="noopener noreferrer">
//                   <Instagram />
//                 </a>
//                 <a href="https://www.threads.com/@kartikkes02" target="_blank" rel="noopener noreferrer">
//                   <ThreadsIcon />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="bg-card p-8 rounded-lg shadow-xs">
//             <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Kartikeya..."
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="kartikeyakesarwani@gmail.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };