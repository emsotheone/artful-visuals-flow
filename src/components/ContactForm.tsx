
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Instagram } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, { message: "Bitte gib deinen Namen ein" }),
  email: z.string().email({ message: "Bitte gib eine gültige E-Mail-Adresse ein" }),
  phone: z.string().optional(),
  service: z.enum(["COMMERCIAL", "EVENTS", "MUSIC", "AERIAL"], {
    required_error: "Bitte wähle einen Service aus",
  }),
  message: z.string().min(10, { message: "Bitte gib eine Nachricht mit mindestens 10 Zeichen ein" }),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // Here you would typically send the form data to a server
    console.log(data);
    
    // Show success toast
    toast({
      title: "Anfrage gesendet",
      description: "Vielen Dank für deine Anfrage! Ich melde mich zeitnah zurück.",
      duration: 5000,
    });
    
    // Reset form
    form.reset();
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Dein Name" {...field} className="transition-all duration-300 focus:ring-[#FFCC00]" />
                  </FormControl>
                  <FormMessage className="text-[#FFCC00]" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail *</FormLabel>
                  <FormControl>
                    <Input placeholder="deine@email.de" {...field} className="transition-all duration-300 focus:ring-[#FFCC00]" />
                  </FormControl>
                  <FormMessage className="text-[#FFCC00]" />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="+49 123 456789" {...field} className="transition-all duration-300 focus:ring-[#FFCC00]" />
                  </FormControl>
                  <FormMessage className="text-[#FFCC00]" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="transition-all duration-300 focus:ring-[#FFCC00]">
                        <SelectValue placeholder="Wähle einen Service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="COMMERCIAL">COMMERCIAL</SelectItem>
                      <SelectItem value="EVENTS">EVENTS</SelectItem>
                      <SelectItem value="MUSIC">MUSIC</SelectItem>
                      <SelectItem value="AERIAL">AERIAL</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[#FFCC00]" />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachricht *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Beschreibe dein Projekt oder deine Anfrage..." 
                    className="min-h-[150px] transition-all duration-300 focus:ring-[#FFCC00]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[#FFCC00]" />
              </FormItem>
            )}
          />
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-[#FFCC00] text-black hover:bg-[#FFD633] transition-all duration-300"
            >
              ANFRAGE ABSENDEN
            </Button>
          </div>
        </form>
      </Form>
      
      <div className="pt-8 border-t border-border">
        <h3 className="text-xl font-display mb-4">FOLGE MIR AUF INSTAGRAM</h3>
        <a 
          href="https://instagram.com/roberts.pods" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-foreground hover:text-[#FFCC00] transition-colors duration-300"
        >
          <Instagram className="w-5 h-5 mr-2" />
          <span>roberts.pods</span>
        </a>
        
        <p className="mt-8 text-sm text-muted-foreground">
          * Pflichtfelder
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Durch das Absenden dieses Formulars stimmst du der Verarbeitung deiner Daten gemäß unserer <a href="#" className="underline hover:text-[#FFCC00]">Datenschutzerklärung</a> zu.
        </p>
      </div>
    </div>
  );
}
