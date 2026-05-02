import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";


export function HeroHome() {
  return (
   <section className="relative overflow-hidden bg-[#0B0D12] py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
              Столица
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Инъекционная гидроизоляция и устранение сложных протечек
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Работаем со сложными протечками, холодными и деформационными швами,
              трещинами, вводами инженерных коммуникаций и подземными частями зданий.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B0D12] transition hover:bg-white/90"
              >
                Получить консультацию
              </Link>

              <Link
                href="/cases"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Смотреть кейсы
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px]">
              <div className="absolute inset-0 rounded-[32px] bg-white/5 blur-3xl" />

              <Image
                src="/branding/logo-illustration.png"
                alt="Столица — инъекционная гидроизоляция"
                width={1200}
                height={900}
                priority
                className="relative h-auto w-full object-contain opacity-95"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}