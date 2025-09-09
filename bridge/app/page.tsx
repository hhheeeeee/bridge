import ChannelTalk from "./_component/ChannelTalk";

export default function Home() {
  return (
    <div className="flex-1">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ChannelTalk />
      </main>
    </div>
  );
}
