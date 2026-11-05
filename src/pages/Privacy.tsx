import { Layout } from "@/components/Layout";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  EMAIL,
  PRIMARY_PHONE,
  CTA_LABEL,
} from "@/lib/site";

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: [
      "We collect information you provide directly to us when you use our website. The types of information we collect include:",
      "Contact information: When you submit a quote request through our online form, we collect your name, email address, phone number, project address, project details, and any photos you upload of your property.",
      "SMS consent: When you check the SMS consent box on our quote form, we record your phone number and your consent to receive text messages about your quote request and project.",
      "Usage data: We automatically collect certain information about your visit, including your IP address, browser type, device type, pages viewed, time spent on pages, and approximate geographic location derived from your IP address.",
    ],
  },
  {
    id: "how-we-use-your-information",
    title: "How We Use Your Information",
    body: [
      "We collect and use your information for the express purpose of providing business services to you. Specifically, we use your information to:",
      "Respond to your quote request and schedule consultations about your landscaping or hardscaping project.",
      "Communicate with you about your project, including follow-up calls, text messages, and emails about scheduling, design plans, and project status.",
      "Improve our website and services by understanding how visitors use the site and which content is most helpful.",
      "Comply with legal obligations and protect our legitimate business interests.",
      "We do not use your personal information for any purpose unrelated to providing business services to you.",
    ],
  },
  {
    id: "cookies-tracking",
    title: "Cookies & Tracking Technologies",
    body: [
      "Our website uses cookies and similar tracking technologies to collect usage data and deliver retargeting advertising. The specific tools we use are:",
      "Google Tag Manager (container ID GTM-5QVCNHP5): A tag management system that deploys and manages tracking codes on our website, including Google Analytics and the Meta Pixel described below.",
      "Google Analytics: Collects information about how visitors use our website, including pages visited, time on site, traffic source, and device information. This data is aggregated and used to understand website performance and improve user experience.",
      "Meta Pixel (Pixel ID 2154852375112085): A piece of code provided by Meta (Facebook) that places a cookie on a visitor's browser when they visit our website. The Meta Pixel allows us to measure the effectiveness of our advertising, understand actions people take after seeing our ads, and build audiences for retargeting campaigns on Meta platforms including Facebook and Instagram.",
      "These tools set cookies on your browser and may collect information such as your device identifier, pages viewed, and actions taken on our website. You can control cookies through your browser settings, and many browsers allow you to refuse cookies or alert you when cookies are being sent.",
    ],
  },
  {
    id: "retargeting-advertising",
    title: "Retargeting & Advertising",
    body: [
      "We use the Meta Pixel and Google Analytics to show relevant advertisements to people who have visited our website. This practice is called retargeting or remarketing.",
      "When you visit our website, the Meta Pixel places a cookie in your browser. This allows Meta to recognize your browser when you later use Facebook, Instagram, or other Meta platforms, and show you advertisements for S&S Landscaping Services. Similarly, Google Analytics data may be used to show you our ads on Google ad networks.",
      "Meta and Google may use the information collected through these tools for their own purposes in accordance with their respective privacy policies. We do not control how these platforms use the data they collect, and we encourage you to review their privacy policies:",
      "Meta Privacy Policy: https://www.facebook.com/privacy/policy/",
      "Google Privacy Policy: https://policies.google.com/privacy",
      "You can opt out of personalized advertising from Google by visiting Google Ads Settings, and from Meta by visiting Meta's Ads Preferences page.",
    ],
  },
  {
    id: "data-storage-security",
    title: "Data Storage & Security",
    body: [
      `Quote form submissions are stored in a secure, encrypted database. Access to your personal information is restricted to authorized personnel who need it to respond to your request and provide services to you.`,
      "We retain your information only as long as necessary to provide the services you requested, comply with legal obligations, resolve disputes, and enforce our agreements. After that, we delete or anonymize your data.",
      "We do not sell, rent, or trade your personal information to third parties. We do not share your information with any third party except as described in this policy or as required by law.",
    ],
  },
  {
    id: "sms-communications",
    title: "SMS Communications",
    body: [
      "By checking the SMS consent box on our quote form, you agree to receive text messages from S&S Landscaping Services at the phone number you provided. These messages may include information about your quote request, scheduling, project updates, and follow-up questions.",
      "Message frequency varies depending on your project and communication needs. Standard message and data rates may apply from your wireless carrier.",
      "You can opt out of SMS communications at any time by replying STOP to any message we send. You can also opt out by contacting us directly using the information in the Contact Us section below. After opting out, you may receive one final confirmation message.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: [
      "We rely on the following third-party services to operate our website and provide services to you. Each service has its own privacy policy that governs how it handles your data:",
      "Google Tag Manager & Google Analytics (Google LLC): Website analytics and tag management. Privacy policy: https://policies.google.com/privacy",
      "Meta / Facebook Pixel (Meta Platforms, Inc.): Advertising and retargeting measurement. Privacy policy: https://www.facebook.com/privacy/policy/",
      "Supabase (Supabase Inc.): Database hosting and backend infrastructure. Privacy policy: https://supabase.com/privacy",
      "We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies to understand how they collect, use, and protect your information.",
    ],
  },
  {
    id: "your-california-privacy-rights",
    title: "Your California Privacy Rights",
    body: [
      "If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):",
      "The right to know: You may request information about the categories of personal information we collect about you, the categories of sources, the business purpose for collecting it, and the categories of third parties with whom we share it.",
      "The right to delete: You may request that we delete personal information we have collected from you, subject to certain exceptions.",
      "The right to opt out: You may opt out of the sale or sharing of your personal information for advertising purposes. We do not sell your personal information, but we do share it with advertising platforms (Meta and Google) for retargeting, which may be considered sharing under California law. You can opt out by disabling cookies in your browser or by using the opt-out links provided in the Retargeting & Advertising section above.",
      "The right to non-discrimination: We will not discriminate against you for exercising any of your privacy rights.",
      "To exercise any of these rights, contact us using the information in the Contact Us section below. We will verify your identity before processing your request and respond within 45 days.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: [
      "Our website is not directed to children under 13 years of age, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us using the information below and we will take steps to delete that information.",
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we collect and use your information.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: [
      `If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:`,
      `${BUSINESS_NAME}`,
      `${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.addressLocality}, ${BUSINESS_ADDRESS.addressRegion} ${BUSINESS_ADDRESS.postalCode}`,
      `Email: ${EMAIL}`,
      `Phone: ${PRIMARY_PHONE.phone}`,
    ],
  },
];

export default function Privacy() {
  return (
    <Layout
      seo={{
        title: `Privacy Policy | ${BUSINESS_NAME}`,
        description:
          "How S&S Landscaping Services collects, uses, and protects your data. Covers quote form submissions, SMS consent, Google Analytics, Meta Pixel retargeting, and your California privacy rights.",
        canonical: "https://snslandscaping.org/privacy",
      }}
    >
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {BUSINESS_NAME} ("we", "us", or "our") respects your privacy and is
              committed to protecting your personal information. This Privacy Policy
              explains what information we collect, how we use it, and the choices you
              have. This policy applies to our website at snslandscaping.org and all
              services provided through it.
            </p>
            <p className="text-sm text-muted-foreground">
              Effective date: November 5, 2026
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col gap-12">
            {SECTIONS.map((section) => (
              <Reveal key={section.id} className="flex flex-col gap-4">
                <h2
                  id={section.id}
                  className="font-heading text-2xl font-medium tracking-tight text-balance md:text-3xl"
                >
                  {section.title}
                </h2>
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      paragraph.includes("https://") || paragraph.includes("Email:") || paragraph.includes("Phone:")
                        ? "text-base leading-relaxed text-muted-foreground"
                        : "text-base leading-relaxed text-muted-foreground"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-8">
            <Link to="/contact#quote-form">
              <Button
                size="lg"
                variant="cta"
                className="group/button btn-lg-pad-end rounded-full py-3.5 text-base font-semibold"
              >
                {CTA_LABEL}
                <span className="btn-icon-circle btn-icon-circle-light ml-2">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Button>
            </Link>
            <a href={PRIMARY_PHONE.phoneHref} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-fluid hover:gap-3">
              <PhoneCall className="size-4" aria-hidden="true" />
              {PRIMARY_PHONE.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
