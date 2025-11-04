"use client";

import { useState } from "react";
import Image from "next/image";

export default function GivePage() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <div className="min-h-[70vh] bg-zinc-900 text-white flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Memberi sebagai Ibadah
          </h1>
          <p className="mt-2 text-gray-400">
            Kami menabur dengan sukacita sebagai wujud penyembahan kepada Yesus.
            &quot;Allah mengasihi orang yang memberi dengan sukacita&quot; (2Kor
            9:7).
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
          <div className="border-b border-white/10 px-6 py-5 text-center">
            <p className="text-sm text-gray-400">Atas Nama</p>
            <p className="mt-1 text-xl font-bold">
              GEREJA JKI HIS GRACE CHURCH
            </p>
          </div>

          <div className="divide-y divide-white/10">
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  BCA
                </p>
                <p className="mt-1 text-lg font-semibold">026 962 7788</p>
              </div>
              <button
                type="button"
                onClick={() => copy("0269627788", "bca")}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold transition hover:bg-white/10 cursor-pointer"
              >
                {copied === "bca" ? "Disalin" : "Salin"}
              </button>
            </div>

            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  BANK SULUT GO
                </p>
                <p className="mt-1 text-lg font-semibold">00102 11068 2020</p>
              </div>
              <button
                type="button"
                onClick={() => copy("00102110682020", "sulutgo")}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold transition hover:bg-white/10 cursor-pointer"
              >
                {copied === "sulutgo" ? "Disalin" : "Salin"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-zinc-950 p-4">
          <p className="mb-3 text-center text-sm text-gray-400">
            QRIS (Scan untuk memberi)
          </p>
          <Image
            src="/give/qris.jpg"
            alt="QRIS JKI His Grace Church"
            width={768}
            height={1055}
            className="mx-auto h-auto w-full max-w-md rounded"
            priority
          />
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Jika perlu bukti transfer, kirim ke WhatsApp gereja: 0812-9596-0003
        </p>
      </div>
    </div>
  );
}
