import {
  LayoutDashboard,
  Users,
  Vbg-gainsboro rounded-md transition-all border border-transparent hover:border-border-dt"
          title={isOpen ? 'Collapse Sidebar' : 'Expand Sidebar'}
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group relative ${
                isActive
                  ? 'bg-gainsboro text-heading-color shadow-sm'
                  : 'text-gray-500 hover:bg-gainsboro/50 hover:text-heading-color'
              }`}
            >
              <div
                className={`${isActive ? 'text-gold' : 'group-hover:text-gold'} transition-colors`}
              >
                <Icon size={20} />
              </div>
              {isOpen && (
                <span className="ml-4 font-semibold text-sm tracking-tight">
                  {item.label}
                </span>
              )}
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-gold rounded-r-full" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border-dt bg-white/50">
        <div className="counter w-full justify-center text-[10px] uppercase tracking-widest py-3">
          {isOpen ? 'Employee Panel' : 'EP'}
        </div>
      </div>
    </aside>
  );
}
