import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

// Мгновенное обновление сайта при «Publish» в Sanity.
// Подключается вебхуком Sanity: POST на /api/revalidate?secret=ХХХ
// (секрет = SANITY_REVALIDATE_SECRET). Тело — документ товара (со slug).
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (
    !process.env.SANITY_REVALIDATE_SECRET ||
    secret !== process.env.SANITY_REVALIDATE_SECRET
  ) {
    return NextResponse.json({ message: "Невірний секрет" }, { status: 401 });
  }

  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = body?.slug?.current ?? body?.slug ?? undefined;
  } catch {
    // тело может быть пустым — ревалидируем общие страницы
  }

  // Списки + главная
  revalidatePath("/products");
  revalidatePath("/lookbook");
  revalidatePath("/");
  // Конкретный товар, если пришёл slug
  if (slug) revalidatePath(`/products/${slug}`);

  return NextResponse.json({
    revalidated: true,
    slug: slug ?? null,
    now: Date.now(),
  });
}
