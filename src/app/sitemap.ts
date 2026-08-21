import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{return ["","/vnitrostatni-autodoprava","/mezinarodni-autodoprava","/spedice","/o-nas","/kariera","/kontakty","/poptavka"].map((path,i)=>({url:`${siteUrl}${path}`,lastModified:new Date(),changeFrequency:i===0?"weekly":"monthly",priority:i===0?1:0.8}))}
