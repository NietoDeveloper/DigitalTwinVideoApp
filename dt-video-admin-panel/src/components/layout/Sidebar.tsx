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
