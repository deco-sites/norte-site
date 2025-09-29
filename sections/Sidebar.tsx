interface NavItem {
  id: string
  href: string
  label: string
  iconSrc?: string
}

interface SidebarProps {
  items: NavItem[]
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-base-100 border-r border-primary p-6 flex flex-col space-y-6 text-sm">
      <nav className="space-y-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="flex items-center gap-2 text-zinc-800 hover:text-primary transition-colors"
          >
            {/* Ícone opcional ou placeholder */}
            <span className="w-4 h-4 border border-zinc-400 rounded-sm" />
            <Image>
            </Image>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
