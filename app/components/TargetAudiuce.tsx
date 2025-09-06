export default function CourseTargetAudience() {
  const audiences = [
    {
      title: "เจ้าของธุรกิจ",
      desc: "ที่ต้องการควบคุมการตลาดและทำโฆษณาด้วยตัวเองอย่างมีประสิทธิภาพ",
    },
    {
      title: "ทีมการตลาด / พนักงานบริษัท",
      desc: "ที่ต้องการเพิ่มทักษะสำคัญเพื่อนำไปพัฒนาองค์กร",
    },
    {
      title: "เอเจนซี่โฆษณา",
      desc: "ที่ต้องการส่งทีมงานมาเรียนรู้เทคนิคเชิงลึกจากอดีตคนของ Google",
    },
    {
      title: "ผู้ที่ไม่มีพื้นฐาน",
      desc: "แต่อยากเริ่มต้นอาชีพในสายการตลาดดิจิทัลอย่างมั่นคง",
    },
  ];

  return (
    <section className="relative w-full ">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-10 text-center">
          <div className="text-white/80 text-lg">หากกำลังสงสัย</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            คอร์สนี้เหมาะกับใคร?
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {audiences.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-[--secondary] mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
