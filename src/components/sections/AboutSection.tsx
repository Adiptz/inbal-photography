'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import content from '@/content/he.json';

export default function AboutSection() {
  const t = useTranslations('about');

  const whatsappNumber = content.contact.whatsappNumber;
  const message = encodeURIComponent('היי, אשמח לשמוע עוד על שירותי הצילום');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative min-h-screen bg-white">
      {/* Desktop & Tablet Layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Text Content - Right side (RTL) */}
        <div className="w-[45%] lg:w-[42%] flex items-center justify-center bg-white relative z-10">
          <div className="w-full max-w-[480px] px-8 lg:px-12 py-10 lg:py-12">
            {/* Decorative Elements */}
            <div className="opacity-0 animate-fade-up">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-[13px] text-text-light tracking-wide">הסיפור שלי</span>
              </div>
            </div>

            {/* H1 Title */}
            <h1 className="opacity-0 animate-fade-up-delay-1 text-[36px] lg:text-[44px] font-medium text-text-primary leading-[1.2] mb-6">
              {t('title')}
            </h1>

            {/* Lead Paragraph */}
            <p className="opacity-0 animate-fade-up-delay-2 text-[17px] lg:text-[18px] text-text-primary leading-[1.6] mb-6 font-normal">
              נעים מאוד, אני ענבל.
              <br />
              <span className="text-text-secondary">
                אמא לאגם, צלמת, ואוהבת רגעים קטנים עם משמעות גדולה.
              </span>
            </p>

            {/* Story Content */}
            <div className="opacity-0 animate-fade-up-delay-3 space-y-4 mb-8">
              <p className="text-[15px] lg:text-base text-text-secondary leading-[1.75] max-w-[420px]">
                המסע שלי בכלל התחיל במשפטים – תואר שני, התמחות, המסלול ה&quot;נכון&quot;.
                ידעתי לעבוד מדויק, לחשוב לעומק, לראות פרטים.
              </p>

              {/* Pull Quote */}
              <blockquote className="relative py-3 pr-5 border-r-2 border-accent my-5">
                <p className="text-[18px] lg:text-[20px] font-medium text-text-primary leading-[1.5]">
                  ואז החיים עשו טוויסט.
                </p>
              </blockquote>

              <p className="text-[15px] lg:text-base text-text-secondary leading-[1.75] max-w-[420px]">
                נכנסתי להריון, ילדתי את אגם – והבנתי שהזמן טס.
                בהיריון שלי לא עשיתי צילומים. הייתי עסוקה, עייפה, בתוך המרוץ.
                ורק אחרי הלידה הבנתי כמה הייתי שמחה לעצור רגע ולשמור את התקופה הזו.
              </p>

              <p className="text-[15px] lg:text-base text-text-secondary leading-[1.75] max-w-[420px]">
                <span className="text-text-primary font-medium">אז בחרתי אחרת.</span>
                {' '}היום אני מצלמת הריונות, אמהות ותינוקות בגישה רגישה, מקצועית וקלילה.
                אור מחמיא, לוקיישנים מדויקים, והרבה חיבור אמיתי.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="opacity-0 animate-fade-up-delay-4">
              <div className="mb-6">
                <p className="text-[15px] lg:text-base text-text-primary leading-[1.7]">
                  כי צילום טוב הוא לא רק תמונה יפה.
                  <br />
                  <span className="text-accent font-medium">
                    הוא זיכרון שיישאר איתך הרבה אחרי שהרגע יעבור.
                  </span>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover
                             text-white px-6 py-3 rounded-full text-[15px] font-medium
                             transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  דברו איתי
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-border
                             text-text-primary hover:border-accent hover:text-accent
                             px-6 py-3 rounded-full text-[15px] font-medium
                             transition-all duration-300"
                >
                  לתיק העבודות
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Image - Left side (RTL), full height */}
        <div className="w-[55%] lg:w-[58%] relative">
          <Image
            src="/images/about/about-portrait-2.jpg"
            alt="ענבל - צלמת הריון ומשפחה"
            fill
            className="object-cover object-left-top"
            sizes="(min-width: 1024px) 58vw, 55vw"
            priority
          />
          {/* Subtle gradient overlay for blend */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/20 to-transparent" />

                  </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Hero Image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <Image
            src="/images/about/about-portrait-2.jpg"
            alt="ענבל - צלמת הריון ומשפחה"
            fill
            className="object-cover object-left-top"
            sizes="100vw"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />

          {/* Floating title on image */}
          <div className="absolute bottom-0 right-0 left-0 p-6 pb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-[12px] text-text-light">הסיפור שלי</span>
            </div>
            <h1 className="text-[32px] font-medium text-text-primary leading-[1.2]">
              {t('title')}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-10 bg-white">
          {/* Lead */}
          <p className="text-[17px] text-text-primary leading-[1.6] mb-6">
            נעים מאוד, אני ענבל.
            <br />
            <span className="text-text-secondary">
              אמא לאגם, צלמת, ואוהבת רגעים קטנים עם משמעות גדולה.
            </span>
          </p>

          {/* Story */}
          <div className="space-y-5 mb-8">
            <p className="text-[15px] text-text-secondary leading-[1.7]">
              המסע שלי בכלל התחיל במשפטים – תואר שני, התמחות, המסלול ה&quot;נכון&quot;.
              ידעתי לעבוד מדויק, לחשוב לעומק, לראות פרטים.
            </p>

            {/* Pull Quote */}
            <blockquote className="py-3 pr-5 border-r-2 border-accent my-6">
              <p className="text-[18px] font-medium text-text-primary leading-[1.5]">
                ואז החיים עשו טוויסט.
              </p>
            </blockquote>

            <p className="text-[15px] text-text-secondary leading-[1.7]">
              נכנסתי להריון, ילדתי את אגם – והבנתי שהזמן טס.
              בהיריון שלי לא עשיתי צילומים. ורק אחרי הלידה הבנתי כמה הייתי שמחה לשמור את התקופה הזו.
            </p>

            <p className="text-[15px] text-text-secondary leading-[1.7]">
              <span className="text-text-primary font-medium">אז בחרתי אחרת.</span>
              {' '}היום אני מצלמת הריונות, אמהות ותינוקות בגישה רגישה, מקצועית וקלילה.
            </p>
          </div>

          {/* Closing */}
          <div className="mb-8">
            <p className="text-[15px] text-text-primary leading-[1.7]">
              כי צילום טוב הוא לא רק תמונה יפה.
              <br />
              <span className="text-accent font-medium">
                הוא זיכרון שיישאר איתך הרבה אחרי שהרגע יעבור.
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover
                         text-white px-6 py-3.5 rounded-full text-[15px] font-medium
                         transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              דברו איתי
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-border
                         text-text-primary hover:border-accent hover:text-accent
                         px-6 py-3.5 rounded-full text-[15px] font-medium
                         transition-all duration-300"
            >
              לתיק העבודות
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
