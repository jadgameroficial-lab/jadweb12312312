import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "JAD WEB | Sites premium e soluções personalizadas", description: "Estratégia, design, tecnologia e IA para transformar ideias em experiências digitais memoráveis.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
