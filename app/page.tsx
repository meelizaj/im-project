import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '01',
    title: 'Easy Scheduling',
    description:
      'Choose your doctor, compare available time slots, and confirm a visit in just a few clicks.',
    href: '/book-appointment',
    cta: 'Book Now',
  },
  {
    icon: '02',
    title: 'Trusted Doctors',
    description:
      'Connect with experienced and compassionate specialists who are selected to provide dependable care.',
    href: '/doctors',
    cta: 'Meet Our Doctors',
  },
  {
    icon: '03',
    title: '24/7 Access',
    description:
      'Reach care whenever you need it, whether you are booking a check-up or asking urgent questions.',
    href: '/contact',
    cta: 'Contact Us',
  },
  {
    icon: '04',
    title: 'Telemedicine',
    description:
      'Speak with healthcare professionals from home through secure virtual consultations that save time.',
    href: '/telemedicine',
    cta: 'Learn More',
  },
  {
    icon: '05',
    title: 'Secure & Private',
    description:
      'Your personal information and consultations are protected with privacy-focused systems and safeguards.',
    href: '/privacy',
    cta: 'Privacy Details',
  },
  {
    icon: '06',
    title: 'Patient Support',
    description:
      'Our support team helps with appointments, follow-ups, and questions so care feels smooth from start to finish.',
    href: '/support',
    cta: 'Get Support',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-screen items-center justify-center gap-15 bg-[#fafafa]">
        <div className="mx-20 flex flex-col items-start gap-7">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-black">
              Compassionate Care
              <br />
              You Can Trust
            </h1>
            <p className="text-lg text-[#7a7a79]">
              Providing quality healthcare services with experienced professionals and modern facilities.
            </p>
          </div>
          <div className="flex gap-4">
            <button>
              <Link
                href="/services"
                className="rounded-full bg-blue-500 px-10 py-4 text-l font-medium text-white hover:bg-blue-600"
              >
                View Services
              </Link>
            </button>
            <button>
              <Link
                href="/about"
                className="rounded-full bg-gray-500 px-10 py-4 text-white hover:bg-gray-600"
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
        <div className="rounded-full bg-[#f0efed] shadow-lg">
          <Image src="/doc1.png" alt="Doctor Image" loading="eager" width={600} height={1100} />
        </div>
      </div>

      <div className="bg-[#fafafa] px-8 py-16 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 rounded-[3rem] bg-white px-8 py-10 shadow-[0_30px_80px_rgba(15,28,47,0.08)] lg:flex-row lg:gap-20 lg:px-14">
          <div className="relative flex w-full justify-center lg:w-[45%]">
            <div className="absolute inset-8 rounded-full bg-[#eef5fb]" />
            <div className="relative overflow-hidden rounded-full border border-white bg-[#f7fafc] p-6 shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
              <Image
                src="/doc6.png"
                alt="Doctor Image"
                width={620}
                height={620}
                className="h-auto w-full max-w-[420px] object-cover"
              />
            </div>

            <div className="absolute bottom-4 left-6 rounded-3xl bg-[#0f1c2f] px-5 py-4 text-white shadow-lg">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm text-slate-300">Years of trusted care</p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-6 lg:w-[55%]">
            <p className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Who We Are
            </p>
            <h1 className="text-4xl font-bold text-black lg:text-5xl">About the Hospital</h1>
            <p className="max-w-2xl text-lg leading-8 text-[#7a7a79]">
              We are committed to delivering exceptional healthcare services with compassion, integrity, and excellence. Our hospital brings together advanced medical technology, experienced specialists, and a patient-first environment to support better outcomes at every stage of care.
            </p>

            <div className="grid w-full gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbfd] p-5">
                <h2 className="text-lg font-semibold text-black">Patient-Centered Care</h2>
                <p className="mt-2 text-sm leading-7 text-[#7a7a79]">
                  Personalized treatments, compassionate staff, and support designed around your comfort.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbfd] p-5">
                <h2 className="text-lg font-semibold text-black">Modern Facilities</h2>
                <p className="mt-2 text-sm leading-7 text-[#7a7a79]">
                  Updated equipment and efficient systems that help our medical team deliver dependable care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f0efed] px-8 py-18 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 text-center">
            <div className="mx-auto rounded-full bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 shadow-sm">
              Our Medical Services
            </div>
            <h1 className="text-4xl font-bold text-black lg:text-5xl">
              Healthcare support built around convenience and trust
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#5f666d]">
              Skip long queues and phone calls. From booking appointments to follow-up support, our services are designed to make care feel simpler, faster, and more reassuring.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex min-h-[320px] flex-col rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(15,28,47,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,28,47,0.14)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white">
                  {service.icon}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-[#0f1c2f]">{service.title}</h2>
                <p className="mt-4 flex-1 text-base leading-8 text-[#6b7280]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center text-base font-semibold text-blue-600 transition group-hover:text-cyan-500"
                >
                  {service.cta} -&gt;
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-[2rem] bg-[#0f1c2f] px-8 py-7 text-white shadow-[0_20px_60px_rgba(15,28,47,0.18)] md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="mt-2 text-sm text-slate-300">
                Online access for support, scheduling, and urgent care guidance.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="mt-2 text-sm text-slate-300">
                Patient-focused care centered on comfort, privacy, and clarity.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">1 Place</p>
              <p className="mt-2 text-sm text-slate-300">
                Consultations, booking, and follow-up support in one streamlined experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-20 bg-[#fafafa] h-100vh">
        <div className="bg-[#fafafa] h-auto w-1/2 mt-20 pl-50">
          <Image
            src="/doc0.png"
            alt="Doctor Image"
            width={500}
            height={500}
            loading="eager"
            className="h-screen w-auto max-h-screen"
          />
        </div>
        <div className="flex w-1/2 flex-col items-start gap-8 pr-30">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              Why Choose Us
            </p>
            <h1 className="text-5xl font-bold text-black">What Makes Zenith Care Unique?</h1>
            <p className="max-w-xl text-lg text-[#7a7a79]">
              We combine compassionate specialists, modern technology, and patient-first support so every visit feels more reassuring and more efficient.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-xl text-blue-500">
                +
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-black">Expert Specialists</h2>
                <p className="max-w-lg text-base leading-7 text-[#7a7a79]">
                  Access experienced healthcare professionals across multiple specialties with care plans tailored to your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-xl text-blue-500">
                *
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-black">Caring Convenience</h2>
                <p className="max-w-lg text-base leading-7 text-[#7a7a79]">
                  Book appointments quickly, connect online when needed, and enjoy a smoother healthcare experience from start to finish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-xl text-blue-500">
                #
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-black">Trusted Facilities</h2>
                <p className="max-w-lg text-base leading-7 text-[#7a7a79]">
                  Receive treatment in a welcoming environment supported by modern equipment, privacy-focused systems, and responsive staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
