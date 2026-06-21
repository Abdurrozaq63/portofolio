import Container from './container';

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-200
        py-8
      ">
      <Container>
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            text-center
            text-sm
            text-slate-600

            md:flex-row
          ">
          <p>© 2026 Muhammad Abdul Rozaq. Semua hak cipta dilindungi.</p>

          <p>Dibangun dengan Next.js, TypeScript, dan Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
