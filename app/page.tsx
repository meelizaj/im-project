import Image from 'next/image'



export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-[#42b8fc] gap-50">
        <div>
            <h1 className="text-5xl font-bold text-white mb-4">Welcome to Zenith Care</h1>
            <p className="text-lg text-white mb-8">Your trusted healthcare partner for a healthier tomorrow.</p>
        </div>
        <div>
            <Image src="/doc1.png" alt="Doctor Image" width={500} height={1000} />
        </div>
    </div>
  );
}
