import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

type ContactItem = {
  type: 'email' | 'linkedin' | 'github' | 'phone';
  label: string;
  value: string;
  href?: string; // for links/mailto
  iconPath: string; // simple text icon; swap to svg later if you want
};

@Component({
  selector: 'app-contact',
  imports: [NgIf, NgFor],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  copied = false;

  contacts: ContactItem[] = [
    {
      type: 'email',
      label: 'Email',
      value: 'joashcast@gmail.com',
      href: 'mailto:joashcast@gmail.com',
      iconPath: 'email.png',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/patrick-joash-castanos',
      href: 'https://www.linkedin.com/in/patrick-joash-castanos-b63325171',
      iconPath: 'blackLinkedin.png',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/PJCast04',
      href: 'https://github.com/PJCast04',
      iconPath: 'git.png',
    },
    {
      type: 'phone',
      label: 'Mobile',
      value: '+63 947 863 6251',
      iconPath: 'phone.png',
    },
  ];

  onCardClick(item: ContactItem) {
    if (item.type === 'phone') {
      this.copyPhone(item.value);
      return;
    }

    if (item.href) {
      // email uses mailto in same tab; links open new tab
      if (item.type === 'email') {
        window.location.href = item.href;
      } else {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      }
    }
  }

  async copyPhone(phone: string) {
    // show UI feedback instantly (no waiting)
    this.flashCopied();

    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = phone;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  }

  private flashCopied() {
    this.copied = true;
    window.clearTimeout((this as any)._copiedTimer);
    (this as any)._copiedTimer = window.setTimeout(() => (this.copied = false), 1200);
  }
}
