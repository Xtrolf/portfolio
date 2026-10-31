"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const KEY = "site-cookie-choice-v1";
export default function CookieConsent() {
  const [visible,setVisible] = useState(false);
  useEffect(()=>{ try { setVisible(!localStorage.getItem(KEY)); } catch { setVisible(true); } },[]);
  function choose(){ try { localStorage.setItem(KEY,"essential-only"); } catch {} setVisible(false); }
  if(!visible) return null;
  return <aside className="cookie-banner" aria-label="Cookie information" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
    <div><span className="micro-label">YOUR PRIVACY</span><h2 id="cookie-title">A SMALL COOKIE NOTE.</h2><p>This portfolio uses only essential browser storage to remember this choice. It does not currently use advertising, analytics or tracking cookies. <Link href="/cookies">Cookie policy</Link> · <Link href="/privacy">Privacy policy</Link></p></div>
    <button type="button" onClick={choose}>CONTINUE WITH ESSENTIALS <span aria-hidden="true">↗</span></button>
  </aside>;
}
