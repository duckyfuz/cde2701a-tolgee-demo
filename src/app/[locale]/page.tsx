import { getLocale } from 'next-intl/server';
import { getStaticData } from '@/tolgee/shared';
import { TolgeeNextProvider } from '@/tolgee/client';

import { TranslationMethodsServer } from './TranslationMethodsServer';
import { TranslationMethodsClient } from './TranslationMethodsClient';
import { LangSelector } from '@/components/LangSelector';

export default async function AboutPage() {
  const locale = await getLocale();
  const locales = await getStaticData(['en', locale]);

  return (
    <TolgeeNextProvider locale={locale} locales={locales}>
      <main className="translation-methods">
        <LangSelector />
        <TranslationMethodsClient />
        <TranslationMethodsServer />
      </main>
    </TolgeeNextProvider>
  );
}
