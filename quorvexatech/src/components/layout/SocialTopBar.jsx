import SocialLinks from '../ui/SocialLinks';

export default function SocialTopBar() {
  return (
    <div className="bg-navy-950 text-white">
      <div className="container-page flex min-h-10 items-center justify-between gap-4 py-1">
        <p className="hidden text-sm text-white/70 md:block">Web development and digital solutions</p>
        <SocialLinks variant="bar" compactOnMobile className="mx-auto md:mx-0" />
      </div>
    </div>
  );
}
