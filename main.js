const mockData = {
    "flags": {
        "X": "Adds support for the X Window System.",
        "a52": "Adds support for decoding ATSC A/52 (AC-3) audio streams.",
        "aac": "Adds support for Advanced Audio Coding.",
        "aalib": "Adds support for media playback using ASCII art via aalib.",
        "accessibility": "Adds support for accessibility features (e.g. screen readers, high contrast).",
        "acl": "Adds support for Access Control Lists.",
        "acpi": "Adds support for Advanced Configuration and Power Interface.",
        "ada": "Enables Ada language support.",
        "aio": "Enables asynchronous I/O support.",
        "alsa": "Enables support for the ALSA sound system.",
        "amd64": "Enables 64-bit support on AMD64 architecture.",
        "amr": "Enables Adaptive Multi-Rate audio codec support.",
        "apache2": "Adds support for the Apache 2 web server.",
        "apparmor": "Enables support for the AppArmor security module.",
        "appindicator": "Adds support for application indicators in the system tray.",
        "aqua": "Enables support for the Aqua interface on macOS.",
        "archive": "Enables archive file support (tar, zip, etc.).",
        "arm": "Enables ARM architecture-specific optimizations.",
        "arm64": "Enables ARM64/AArch64 architecture support.",
        "aspell": "Adds support for the Aspell spell checker.",
        "async": "Enables asynchronous processing support.",
        "atm": "Enables ATM (Asynchronous Transfer Mode) networking support.",
        "audit": "Enables Linux audit framework support.",
        "avahi": "Enables Avahi mDNS/DNS-SD service discovery support.",
        "avif": "Adds support for the AVIF image format.",
        "avx": "Adds support for Advanced Vector Extensions.",
        "avx2": "Adds support for Advanced Vector Extensions 2.",
        "avx512": "Adds support for 512-bit Advanced Vector Extensions.",
        "bash-completion": "Enables programmable completion for the bash shell.",
        "berkdb": "Adds support for the Berkeley DB.",
        "bidi": "Enables bidirectional text support.",
        "bindist": "Enables building binary packages for redistribution.",
        "blender": "Enables Blender integration.",
        "bluetooth": "Enables Bluetooth support.",
        "boost": "Adds support for the Boost C++ libraries.",
        "branding": "Adds branding elements.",
        "brotli": "Enables Brotli compression.",
        "btrfs": "Adds support for the Btrfs filesystem.",
        "bzip2": "Adds support for bzip2 compression.",
        "c++11": "Enables C++11 standard support.",
        "c++17": "Enables C++17 standard support.",
        "c++20": "Enables C++20 standard support.",
        "cairo": "Adds support for the Cairo 2D graphics library.",
        "calendar": "Enables calendar/date support.",
        "caps": "Adds support for POSIX capabilities.",
        "cdb": "Adds support for the constant database format.",
        "cdda": "Enables CD Digital Audio support.",
        "cddb": "Enables CDDB (CD database) lookup support.",
        "cdr": "Enables CD recording support.",
        "cgi": "Enables CGI script support.",
        "cgroup": "Enables cgroup (control group) support.",
        "cjk": "Adds support for Chinese, Japanese, and Korean character sets.",
        "clang": "Uses the Clang compiler instead of GCC.",
        "clamd": "Enables ClamAV daemon support for virus scanning.",
        "clucene": "Adds support for the CLucene search engine library.",
        "cmake": "Enables CMake build system support.",
        "connman": "Enables ConnMan network manager support.",
        "consolekit": "Enables ConsoleKit for session tracking.",
        "coreaudio": "Enables macOS Core Audio support.",
        "coverage": "Enables code coverage instrumentation.",
        "cracklib": "Enables password strength checking via CrackLib.",
        "crypt": "Adds support for encryption.",
        "css": "Enables CSS support.",
        "cups": "Adds support for the Common Unix Printing System.",
        "curl": "Adds support for the cURL library.",
        "cuda": "Enables NVIDIA CUDA support.",
        "csharp": "Enables C# language support, often via dotnet.",
        "custom-cflags": "Allows building with user-specified CFLAGS.",
        "d3d9": "Enables Direct3D 9 support via Wine/Gallium.",
        "dav1d": "Enables dav1d AV1 video decoder support.",
        "dbus": "Enables D-Bus support for desktop integration.",
        "debug": "Enables debug builds with extra logging and symbols.",
        "dedicated": "Builds only a dedicated server (without client).",
        "device-mapper": "Enables Linux device-mapper support (LVM, dm-crypt).",
        "dga": "Enables Direct Graphics Access support.",
        "dhcp": "Enables DHCP client/server support.",
        "djvu": "Enables DjVu document format support.",
        "dma-buf": "Enables DMA-BUF buffer sharing support.",
        "dnssec": "Enables DNSSEC support for DNS security.",
        "doc": "Adds documentation.",
        "docker": "Enables Docker container support.",
        "dotnet": "Enables .NET Core support.",
        "drm": "Enables Direct Rendering Manager support.",
        "dts": "Enables Digital Theater Systems support.",
        "dv": "Enables DV (Digital Video) format support.",
        "dvb": "Enables DVB (Digital Video Broadcasting) support.",
        "dvd": "Adds DVD support.",
        "efi": "Enables EFI/UEFI support.",
        "efistub": "Enables building a kernel with a built-in EFI stub.",
        "egl": "Enables EGL support for rendering API abstraction.",
        "elogind": "Uses elogind for session management.",
        "elixir": "Enables Elixir language support.",
        "emacs": "Adds support for the Emacs editor.",
        "embedded": "Enables building for embedded systems with reduced footprint.",
        "enchant": "Adds support for the Enchant spell-checking library.",
        "erlang": "Enables Erlang language support.",
        "examples": "Installs example files and code.",
        "exif": "Enables EXIF metadata support for images.",
        "ext2": "Adds support for the ext2 filesystem.",
        "ext3": "Adds support for the ext3 filesystem.",
        "ext4": "Adds support for the ext4 filesystem.",
        "extra": "Enables extra/additional features not built by default.",
        "fam": "Enables File Alteration Monitor support.",
        "fat": "Adds support for FAT filesystems.",
        "fbcon": "Enables framebuffer console support.",
        "ffmpeg": "Enables FFmpeg support for video and audio transcoding.",
        "fftw": "Adds support for the Fastest Fourier Transform in the West library.",
        "filecaps": "Uses file-based capabilities instead of setuid.",
        "firewalld": "Enables firewalld firewall management support.",
        "fish-completion": "Enables programmable completion for the fish shell.",
        "flac": "Adds support for the Free Lossless Audio Codec.",
        "flatpak": "Enables Flatpak application sandboxing support.",
        "fltk": "Adds support for the FLTK GUI toolkit.",
        "fontconfig": "Enables font configuration and customization.",
        "fortran": "Enables Fortran language support.",
        "fpm": "Enables FastCGI Process Manager support.",
        "freetds": "Adds support for the FreeTDS library.",
        "freetype": "Enables FreeType font rendering library support.",
        "ftp": "Enables FTP protocol support.",
        "gallium": "Enables Gallium3D driver framework in Mesa.",
        "gdbm": "Adds support for the GNU database manager.",
        "geoip": "Enables GeoIP geographical location lookup.",
        "geolocation": "Enables geolocation services support.",
        "geos": "Adds support for the GEOS geometry engine.",
        "gif": "Adds GIF image support.",
        "gimp": "Enables GIMP image editor integration.",
        "gir": "Enables GObject Introspection support.",
        "git": "Uses git for version control.",
        "gles2": "Enables OpenGL ES 2.0 support.",
        "glib": "Enables GLib library support.",
        "gmp": "Adds support for the GNU Multiple Precision Arithmetic Library.",
        "gnome": "Adds support for the GNOME desktop environment.",
        "gnome-keyring": "Enables GNOME Keyring integration for secure credential storage.",
        "gnuplot": "Enables Gnuplot plotting support.",
        "gnupg": "Adds support for the GNU Privacy Guard.",
        "go": "Enables Go language support.",
        "gphoto2": "Enables digital camera access via libgphoto2.",
        "graphicsmagick": "Adds support for GraphicsMagick image manipulation.",
        "graphics": "Adds support for graphical mode in programs that can also run in text mode (e.g. links).",
        "graphite": "Enables Graphite font rendering support.",
        "graphviz": "Enables Graphviz graph visualization support.",
        "grub": "Enables GRUB bootloader integration.",
        "gstreamer": "Enables the GStreamer multimedia framework.",
        "gtk": "Adds support for the GTK+ toolkit.",
        "gtk2": "Adds support for GTK+ 2.x specifically.",
        "gtk3": "Adds support for GTK+ 3.x specifically.",
        "gtk4": "Adds support for GTK 4.x specifically.",
        "gui": "Enables graphical user interface support.",
        "gzip": "Adds gzip compression support.",
        "hardened": "Enables hardened build options for security.",
        "harfbuzz": "Enables HarfBuzz text shaping engine support.",
        "haskell": "Enables Haskell language support.",
        "hddtemp": "Enables hard drive temperature monitoring.",
        "hdri": "Enables High Dynamic Range Imaging support.",
        "heif": "Adds support for HEIF/HEIC image format.",
        "hfs": "Adds support for the HFS/HFS+ filesystems.",
        "http": "Enables HTTP protocol support.",
        "http2": "Enables HTTP/2 protocol support.",
        "http3": "Enables HTTP/3 (QUIC) protocol support.",
        "i3": "Enables support for the i3 window manager.",
        "i686": "Enables 32-bit x86 architecture support.",
        "ibus": "Enables support for the Intelligent Input Bus.",
        "icu": "Adds support for International Components for Unicode.",
        "idn": "Enables Internationalized Domain Names support.",
        "ieee1394": "Enables FireWire (IEEE 1394) support.",
        "imagemagick": "Adds support for the ImageMagick image manipulation suite.",
        "imap": "Enables IMAP email protocol support.",
        "imlib": "Adds support for the Imlib image library.",
        "infiniband": "Enables InfiniBand networking support.",
        "initramfs": "Enables building an initramfs.",
        "inkscape": "Enables Inkscape vector graphics editor integration.",
        "inotify": "Enables inotify filesystem event monitoring.",
        "introspection": "Enables GObject Introspection data generation.",
        "ipv6": "Enables IPv6 network protocol support.",
        "jack": "Enables JACK Audio Connection Kit support.",
        "java": "Adds support for Java.",
        "javascript": "Enables JavaScript support.",
        "jemalloc": "Uses jemalloc memory allocator for better performance.",
        "jit": "Enables Just-In-Time compilation.",
        "jpeg": "Adds JPEG image support.",
        "jpeg2k": "Adds JPEG 2000 image support.",
        "joystick": "Adds support for joysticks and gamepads.",
        "json": "Enables JSON support.",
        "julia": "Enables Julia language support.",
        "kde": "Adds support for the KDE desktop environment.",
        "kdenlive": "Enables Kdenlive video editor integration.",
        "kerberos": "Adds support for the Kerberos network authentication protocol.",
        "keyring": "Enables keyring/keychain credential storage.",
        "kvm": "Enables support for Kernel-based Virtual Machine.",
        "ladspa": "Enables LADSPA audio plugin API support.",
        "lame": "Adds support for the LAME MP3 encoder.",
        "lapack": "Adds support for the LAPACK linear algebra library.",
        "latex": "Enables LaTeX support for typesetting.",
        "lcms": "Enables Little CMS color management support.",
        "ldap": "Adds support for the Lightweight Directory Access Protocol.",
        "ldb": "Enables LDB (LDAP-like database) support.",
        "libass": "Enables libass subtitle rendering support.",
        "libatomic": "Enables libatomic for atomic operations.",
        "libcaca": "Enables colored ASCII art graphics support via libcaca.",
        "libedit": "Uses libedit instead of readline for line editing.",
        "libevent": "Adds support for the libevent event notification library.",
        "libffi": "Enables Foreign Function Interface support.",
        "libinput": "Enables the libinput library for input devices.",
        "libnotify": "Enables desktop notifications.",
        "libressl": "Uses LibreSSL instead of OpenSSL.",
        "libsamplerate": "Enables audio sample rate conversion via libsamplerate.",
        "libsoxr": "Enables SoX Resampler library support.",
        "libtirpc": "Enables TI-RPC support for RPC services.",
        "libvirt": "Enables libvirt virtualization API support.",
        "libwrap": "Enables TCP wrapper support via libwrap.",
        "lirc": "Enables Linux Infrared Remote Control support.",
        "llvm": "Uses the LLVM compiler infrastructure.",
        "lm-sensors": "Enables hardware monitoring via lm-sensors.",
        "lto": "Enables Link Time Optimization for better performance.",
        "lua": "Enables Lua scripting language support.",
        "luajit": "Enables LuaJIT just-in-time compiler for Lua.",
        "lv2": "Enables LV2 audio plugin support.",
        "lxc": "Enables support for Linux Containers.",
        "lxqt": "Adds support for the LXQt desktop environment.",
        "lynx": "Enables support for the lynx text-based browser.",
        "lz4": "Enables LZ4 compression support.",
        "lzma": "Enables LZMA compression support.",
        "lzo": "Enables LZO compression support.",
        "mad": "Enables MAD MPEG audio decoder support.",
        "man": "Installs man pages.",
        "mariadb": "Adds support for the MariaDB database.",
        "mate": "Adds support for the MATE desktop environment.",
        "matplotlib": "Enables support for the Matplotlib plotting library.",
        "mbox": "Enables mbox mail storage format.",
        "memcached": "Adds support for the Memcached caching daemon.",
        "meson": "Enables the Meson build system.",
        "midi": "Enables MIDI audio support.",
        "-minimal": "Disables minimal build features.",
        "mms": "Enables Microsoft Media Services streaming support.",
        "mng": "Adds MNG animation format support.",
        "modules": "Enables building of kernel modules.",
        "modplug": "Enables MOD audio file support via libmodplug.",
        "mono": "Enables Mono .NET runtime support.",
        "motif": "Adds support for the Motif GUI toolkit.",
        "mp3": "Adds MP3 audio support.",
        "mp4": "Adds MP4 video support.",
        "mpeg": "Enables MPEG video/audio support.",
        "mpd": "Enables Music Player Daemon support.",
        "mpi": "Enables Message Passing Interface support for parallel computing.",
        "mplayer": "Enables MPlayer media player integration.",
        "mqtt": "Enables MQTT messaging protocol support.",
        "mtp": "Enables Media Transfer Protocol support.",
        "multilib": "Enables support for 32-bit libraries on 64-bit systems.",
        "multimedia": "Enables multimedia (audio/video) support.",
        "musepack": "Enables Musepack audio codec support.",
        "musicbrainz": "Enables MusicBrainz audio metadata lookup.",
        "mysql": "Adds support for the MySQL database.",
        "nano": "Enables nano text editor integration.",
        "nas": "Enables Network Audio System support.",
        "ncurses": "Enables support for the ncurses terminal UI library.",
        "neon": "Enables ARM NEON SIMD instructions support.",
        "netcdf": "Enables NetCDF scientific data format support.",
        "networkmanager": "Enables support for NetworkManager.",
        "nfs": "Enables Network File System support.",
        "nginx": "Adds support for the Nginx web server.",
        "nis": "Enables Network Information Service support.",
        "nls": "Enables Native Language Support (localization).",
        "nmap": "Enables Nmap network scanner integration.",
        "nodejs": "Enables Node.js support.",
        "nsplugin": "Enables Netscape plugin API support.",
        "ntfs": "Adds support for the NTFS filesystem.",
        "numa": "Enables Non-Uniform Memory Access support.",
        "numpy": "Enables NumPy support for numerical operations.",
        "nvenc": "Enables NVIDIA hardware video encoding support.",
        "objc": "Enables Objective-C language support.",
        "objc++": "Enables Objective-C++ language support.",
        "obs-studio": "Enables OBS Studio streaming software integration.",
        "ocaml": "Enables OCaml language support.",
        "odbc": "Enables ODBC database connectivity support.",
        "ogg": "Enables Ogg container format support.",
        "opencl": "Enables OpenCL support for parallel computing.",
        "openexr": "Enables OpenEXR high dynamic range image support.",
        "opengl": "Adds support for OpenGL.",
        "openh264": "Enables Cisco's OpenH264 codec support.",
        "openmp": "Enables OpenMP for multi-threading.",
        "openrc": "Enables support for the OpenRC init system.",
        "openssl": "Adds support for the OpenSSL library.",
        "openvpn": "Enables OpenVPN tunnel support.",
        "opus": "Adds support for the Opus audio codec.",
        "oracle": "Enables Oracle database support.",
        "orc": "Enables Orc (Oil Runtime Compiler) support.",
        "oss": "Enables Open Sound System support.",
        "overlay": "Enables OverlayFS support.",
        "overlayfs": "Enables OverlayFS filesystem support for Docker and containers.",
        "pam": "Enables Pluggable Authentication Modules support.",
        "pango": "Adds support for the Pango text layout library.",
        "pax_kernel": "Enables PaX kernel security features.",
        "pcap": "Enables packet capture support via libpcap.",
        "pch": "Enables precompiled header support for faster builds.",
        "pcmcia": "Enables PCMCIA/CardBus support.",
        "pcre": "Adds support for Perl-Compatible Regular Expressions.",
        "pcre2": "Adds support for PCRE2 (Perl-Compatible Regular Expressions v2).",
        "pdf": "Enables PDF document generation/rendering support.",
        "perl": "Enables Perl language support.",
        "pgo": "Enables Profile Guided Optimization for better performance.",
        "php": "Enables PHP language support.",
        "pie": "Enables Position Independent Executables for security.",
        "pipewire": "Enables support for the PipeWire multimedia framework.",
        "pkcs11": "Enables PKCS#11 cryptographic token support.",
        "plasma": "Adds support for the KDE Plasma desktop.",
        "png": "Adds PNG image support.",
        "policykit": "Enables PolicyKit for privilege management.",
        "portaudio": "Enables PortAudio cross-platform audio I/O.",
        "posix": "Enables POSIX compliance.",
        "postgres": "Adds support for the PostgreSQL database.",
        "postgresql": "Adds support for the PostgreSQL database.",
        "postscript": "Enables PostScript support.",
        "ppp": "Enables PPP (Point-to-Point Protocol) support.",
        "prefix": "Enables Gentoo Prefix support for non-root installs.",
        "profile": "Enables profiling support.",
        "proprietary-codecs": "Enables proprietary audio/video codec support.",
        "protobuf": "Enables Protocol Buffers support.",
        "proxy": "Enables proxy server support.",
        "pulseaudio": "Enables support for the PulseAudio sound server.",
        "python": "Enables Python support.",
        "qemu": "Enables QEMU emulator support.",
        "qml": "Enables QML support for declarative UIs.",
        "qt5": "Adds support for the Qt 5 toolkit.",
        "qt6": "Adds support for the Qt 6 toolkit.",
        "quota": "Enables disk quota support.",
        "radius": "Enables RADIUS authentication support.",
        "raw": "Enables RAW image format support.",
        "rdp": "Enables Remote Desktop Protocol support.",
        "readline": "Adds support for the readline library for command-line editing.",
        "redis": "Adds support for the Redis key-value store.",
        "rpc": "Enables Remote Procedure Call support.",
        "rss": "Enables RSS feed support.",
        "rtmp": "Enables RTMP streaming protocol support.",
        "ruby": "Enables Ruby language support.",
        "runc": "Enables runC container runtime support.",
        "rust": "Enables Rust language support.",
        "samba": "Adds support for the Samba SMB/CIFS server.",
        "sasl": "Enables SASL (Simple Authentication and Security Layer) support.",
        "scala": "Enables Scala language support.",
        "scanner": "Adds support for scanners.",
        "screencast": "Enables screencasting/screen recording support.",
        "sctp": "Enables Stream Control Transmission Protocol support.",
        "sdl": "Enables support for the Simple DirectMedia Layer.",
        "sdl2": "Enables support for SDL 2.x specifically.",
        "seccomp": "Enables seccomp sandboxing support.",
        "selinux": "Enables SELinux for mandatory access control.",
        "sensord": "Enables hardware sensor daemon support.",
        "skey": "Enables S/Key one-time password support.",
        "slang": "Enables S-Lang library support.",
        "smartcard": "Enables smart card support.",
        "smime": "Enables S/MIME email encryption support.",
        "smp": "Enables Symmetric Multiprocessing support.",
        "snappy": "Enables Snappy compression support.",
        "snmp": "Enables SNMP network management protocol support.",
        "sndfile": "Enables libsndfile audio file I/O support.",
        "socks5": "Enables SOCKS5 proxy protocol support.",
        "sound": "Enables sound support.",
        "sox": "Enables SoX audio processing support.",
        "speex": "Enables Speex audio codec support.",
        "spell": "Enables spell checking.",
        "spice": "Enables SPICE remote display protocol support.",
        "split-usr": "Keeps /usr separate from / root filesystem.",
        "sqlite": "Adds support for the SQLite database.",
        "srt": "Enables Secure Reliable Transport protocol support.",
        "ssh": "Adds support for the Secure Shell protocol.",
        "sse": "Enables Streaming SIMD Extensions.",
        "sse2": "Enables SSE2 instruction set support.",
        "sse3": "Enables SSE3 instruction set support.",
        "sse4": "Enables SSE4 instruction set support.",
        "ssl": "Adds support for Secure Sockets Layer (synonym for openssl).",
        "startup-notification": "Enables startup notification protocol support.",
        "static": "Builds static libraries/binaries instead of shared ones.",
        "static-libs": "Builds static libraries in addition to shared.",
        "steam": "Enables Steam gaming platform integration.",
        "subversion": "Enables Subversion version control support.",
        "suid": "Enables setuid installation for programs that need it.",
        "svga": "Adds support for SVGAlib.",
        "svg": "Adds SVG image support.",
        "sway": "Enables support for the Sway Wayland compositor.",
        "swift": "Enables Swift language support.",
        "symlink": "Creates symlinks instead of copying files.",
        "syslog": "Enables system logging support.",
        "systemd": "Enables support for the systemd init system.",
        "taglib": "Enables TagLib audio metadata library support.",
        "tcl": "Enables Tcl scripting language support.",
        "tcmalloc": "Uses Google's TCMalloc memory allocator.",
        "tcpd": "Adds support for TCP wrappers.",
        "telemetry": "Enables telemetry/usage data collection.",
        "test": "Enables running tests.",
        "theora": "Enables Theora video codec support.",
        "threads": "Enables multi-threading support.",
        "thunderbolt": "Enables Thunderbolt port support.",
        "tidy": "Enables HTML Tidy library support.",
        "tiff": "Adds TIFF image support.",
        "timidity": "Enables TiMidity++ MIDI playback support.",
        "tk": "Adds support for the Tk toolkit.",
        "tls": "Enables Transport Layer Security support.",
        "tmpfiles": "Enables tmpfiles.d support for managing temporary files.",
        "toml": "Enables TOML configuration format support.",
        "tools": "Builds and installs extra tools/utilities.",
        "tor": "Enables Tor anonymity network support.",
        "truetype": "Enables TrueType font support.",
        "tui": "Enables Terminal User Interface support.",
        "twolame": "Enables TwoLAME MPEG Audio Layer 2 encoder support.",
        "typescript": "Enables TypeScript language support.",
        "udev": "Enables udev support for device management.",
        "udisks": "Enables udisks support for disk management.",
        "uefi": "Enables UEFI firmware interface support.",
        "unicode": "Enables Unicode character set support.",
        "unreal": "Enables support for Unreal Engine.",
        "upower": "Enables upower support for power management.",
        "upnp": "Enables Universal Plug and Play support.",
        "usb": "Adds USB support.",
        "usbredir": "Enables USB redirection support (e.g. for QEMU).",
        "v4l": "Adds support for Video4Linux.",
        "v4l2": "Adds support for Video4Linux2.",
        "vaapi": "Enables VA-API for hardware video acceleration.",
        "vala": "Enables Vala programming language support.",
        "vcd": "Enables Video CD support.",
        "vdpau": "Enables VDPAU for hardware video acceleration.",
        "verify-sig": "Enables cryptographic signature verification of source archives.",
        "vhosts": "Enables virtual host support.",
        "vim": "Adds support for the Vim editor.",
        "vim-syntax": "Adds Vim syntax highlighting.",
        "virtualbox": "Enables VirtualBox guest additions.",
        "vmware": "Enables VMWare guest additions.",
        "vnc": "Enables VNC remote desktop support.",
        "vorbis": "Enables Ogg Vorbis audio codec support.",
        "vpx": "Enables VP8/VP9 video codec support via libvpx.",
        "vulkan": "Adds support for the Vulkan graphics API.",
        "wacom": "Adds support for Wacom tablets.",
        "wavpack": "Enables WavPack audio compression support.",
        "wayland": "Enables support for the Wayland display server protocol.",
        "webengine": "Enables Qt WebEngine browser support.",
        "webkit": "Enables support for the WebKit rendering engine.",
        "webpack": "Enables Webpack bundler support.",
        "webp": "Adds WebP image format support.",
        "webrtc": "Enables WebRTC real-time communication support.",
        "wget": "Adds support for the Wget file downloader.",
        "wifi": "Enables wireless networking support.",
        "wine": "Enables Wine compatibility layer for Windows applications.",
        "wma": "Enables Windows Media Audio support.",
        "wmf": "Enables Windows Metafile format support.",
        "woff2": "Enables WOFF2 web font format support.",
        "wxwidgets": "Adds support for the wxWidgets GUI toolkit.",
        "x264": "Enables H.264 video encoding.",
        "x265": "Enables H.265/HEVC video encoding.",
        "xa": "Enables XA audio format support.",
        "xattr": "Enables extended filesystem attributes support.",
        "xcb": "Enables X C Binding (XCB) protocol support.",
        "xcomposite": "Enables X Composite extension support.",
        "xen": "Enables Xen hypervisor support.",
        "xfce": "Adds support for the XFCE desktop environment.",
        "xfs": "Adds support for the XFS filesystem.",
        "xft": "Adds support for Xft font rendering.",
        "xinerama": "Adds support for Xinerama for multi-monitor setups.",
        "xkb": "Enables X Keyboard Extension support.",
        "xml": "Adds XML support.",
        "xmlrpc": "Enables XML-RPC remote procedure call support.",
        "xmp": "Enables XMP metadata support.",
        "xosd": "Enables X On-Screen Display support.",
        "xpm": "Adds XPM image format support.",
        "xrandr": "Enables XRandR display configuration support.",
        "xscreensaver": "Enables XScreenSaver support.",
        "xslt": "Enables XSLT transformation support.",
        "xv": "Enables XVideo extension support.",
        "xvid": "Enables Xvid video encoding.",
        "yaml": "Enables YAML data format support.",
        "zeroconf": "Adds support for Zero-configuration networking.",
        "zfs": "Adds support for the ZFS filesystem.",
        "zip": "Enables ZIP archive support.",
        "zlib": "Enables zlib compression support.",
        "zmq": "Enables ZeroMQ messaging library support.",
        "zsh-completion": "Enables programmable completion for the zsh shell.",
        "zstd": "Enables Zstandard compression support."
    },
    "packages": {
        "app-admin/keepassxc": ["X", "qt5", "dbus", "yubikey", "autotype", "browser"],
        "app-admin/sudo": ["pam", "ldap", "selinux", "ssl", "skey"],
        "app-admin/syslog-ng": ["json", "redis", "mongodb", "amqp", "systemd", "geoip"],
        "app-arch/p7zip": ["static", "doc", "rar"],
        "app-backup/borgbackup": ["python", "lz4", "zstd", "fuse"],
        "app-containers/docker": ["btrfs", "overlayfs", "device-mapper", "runc", "seccomp", "apparmor"],
        "app-containers/lxc": ["seccomp", "apparmor", "selinux", "caps", "pam"],
        "app-containers/podman": ["btrfs", "seccomp", "apparmor", "selinux", "rootless", "cgroup"],
        "app-crypt/gnupg": ["ssl", "smartcard", "usb", "ldap", "readline", "nls"],
        "app-crypt/veracrypt": ["X", "wxwidgets", "fuse"],
        "app-editors/emacs": ["X", "gtk", "imagemagick", "json", "ssl", "xml", "cairo", "harfbuzz", "xft", "dbus", "gmp", "threads"],
        "app-editors/nano": ["ncurses", "spell", "unicode", "nls", "justify"],
        "app-editors/neovim": ["lua", "luajit", "python", "ruby", "nodejs", "tui"],
        "app-editors/vim": ["X", "gtk", "lua", "perl", "python", "ruby", "cscope", "terminal"],
        "app-editors/vscode": ["X", "dbus", "gtk", "clang", "nodejs", "python", "rust", "java"],
        "app-emulation/qemu": ["kvm", "spice", "gtk", "sdl", "sdl2", "vnc", "usb", "usbredir", "curl", "ssh", "pulseaudio", "opengl", "virgl", "numa"],
        "app-emulation/virtualbox": ["X", "qt5", "opengl", "alsa", "pulseaudio", "python", "vnc", "sdl", "pam"],
        "app-emulation/wine-staging": ["X", "opengl", "vulkan", "alsa", "cups", "d3d9", "gecko", "mono", "multilib", "pulseaudio", "vaapi"],
        "app-misc/neofetch": ["X", "gpu", "wmctrl"],
        "app-misc/screen": ["pam", "multiuser", "nethack", "utmp"],
        "app-misc/tmux": ["utempter", "vim-syntax", "systemd"],
        "app-office/calligra": ["kde", "qt5", "dbus", "opengl", "fontconfig", "lcms"],
        "app-office/libreoffice": ["X", "gtk", "java", "dbus", "cups", "pdfimport", "vulkan", "bluetooth", "mariadb", "postgresql"],
        "app-portage/layman": ["git", "subversion", "mercurial", "sync-plugin-portage"],
        "app-shells/bash": ["readline", "nls", "plugins", "mem-scramble"],
        "app-shells/fish": ["doc", "nls", "test"],
        "app-shells/zsh": ["pcre", "caps", "unicode", "doc", "gdbm"],
        "app-text/ghostscript-gpl": ["X", "cups", "gtk", "fontconfig", "jpeg", "png", "tiff", "dbus"],
        "app-text/poppler": ["cairo", "qt5", "qt6", "jpeg", "png", "tiff", "lcms", "nss"],
        "app-text/texlive": ["X", "latex", "cjk", "doc", "truetype", "xetex", "luatex"],
        "dev-db/mariadb": ["ssl", "systemd", "pam", "jemalloc", "innodb-lz4", "innodb-lzo", "innodb-snappy", "galera", "numa"],
        "dev-db/mongodb": ["ssl", "json", "kerberos", "sasl", "snappy", "zstd"],
        "dev-db/postgresql": ["ssl", "pam", "ldap", "kerberos", "xml", "uuid", "nls", "icu", "readline", "threads"],
        "dev-db/redis": ["ssl", "systemd", "jemalloc", "tcmalloc", "lua"],
        "dev-db/sqlite": ["ssl", "readline", "icu", "json", "fts3", "fts4", "fts5", "threads"],
        "dev-java/openjdk": ["X", "alsa", "cups", "headless-awt", "javafx", "source"],
        "dev-lang/dotnet": ["dotnet", "sdk", "runtime"],
        "dev-lang/ghc": ["doc", "profile", "llvm", "numa"],
        "dev-lang/go": ["test", "doc"],
        "dev-lang/lua": ["readline", "doc", "deprecated"],
        "dev-lang/perl": ["threads", "ithreads", "doc", "gdbm", "berkdb"],
        "dev-lang/php": ["apache2", "cgi", "fpm", "curl", "mysql", "mysqli", "pdo", "gd", "xml", "json", "ssl", "zip", "ldap", "imap", "sqlite", "postgres", "intl"],
        "dev-lang/python": ["multilib", "ssl", "threads", "gdbm", "readline", "sqlite", "bluetooth", "tk", "lto", "pgo", "ensurepip"],
        "dev-lang/ruby": ["ssl", "readline", "gdbm", "doc", "threads", "jit"],
        "dev-lang/rust": ["llvm", "debug", "doc", "clippy", "rustfmt", "lto", "parallel-compiler", "wasm"],
        "dev-libs/boost": ["python", "threads", "icu", "nls", "mpi", "context", "tools", "static-libs"],
        "dev-libs/glib": ["dbus", "mime", "systemd", "test"],
        "dev-libs/icu": ["static-libs", "doc", "examples"],
        "dev-libs/libpcre2": ["pcre2", "jit", "unicode", "readline"],
        "dev-libs/libxml2": ["python", "icu", "readline", "ipv6", "threads"],
        "dev-libs/openssl": ["asm", "static-libs", "test", "tls-heartbeat", "zlib"],
        "dev-python/numpy": ["lapack", "doc", "test"],
        "dev-python/pillow": ["jpeg", "png", "tiff", "webp", "xcb", "freetype", "lcms"],
        "dev-qt/qtcore": ["qt5", "qt6", "dbus", "icu", "test", "ssl"],
        "dev-qt/qtdeclarative": ["qml", "widgets", "test"],
        "dev-qt/qtwebengine": ["webengine", "alsa", "pulseaudio", "pipewire", "geolocation", "proprietary-codecs", "screencast"],
        "dev-util/cmake": ["qt5", "ncurses", "doc", "test", "emacs"],
        "dev-util/git": ["curl", "ssl", "pcre", "perl", "python", "blksha1", "gpg", "subversion", "webdav", "iconv", "nls", "threads"],
        "dev-util/lldb": ["llvm", "python", "lua", "xml"],
        "dev-util/valgrind": ["mpi", "doc"],
        "dev-vcs/mercurial": ["python", "curl", "gpg", "zstd"],
        "dev-vcs/subversion": ["apache2", "perl", "python", "ruby", "java", "sasl", "dbus"],
        "games-engines/godot": ["X", "opengl", "vulkan", "pulseaudio", "lto", "game-tools"],
        "games-util/steam-launcher": ["steam", "runtime", "multilib"],
        "gnome-base/gnome": ["gtk", "dbus", "X", "wayland", "accessibility", "cups", "bluetooth"],
        "kde-plasma/plasma-meta": ["plasma", "kde", "qt5", "qt6", "dbus", "wayland", "X", "bluetooth", "networkmanager"],
        "mail-client/thunderbird": ["X", "dbus", "gtk", "pulseaudio", "wayland", "wifi", "lto", "pgo"],
        "mail-mta/postfix": ["ssl", "sasl", "ldap", "mysql", "postgresql", "sqlite", "pam", "eai", "pcre"],
        "media-gfx/blender": ["cuda", "opencl", "cycles", "python", "ffmpeg", "collada", "alembic", "opengl", "openvdb", "jack"],
        "media-gfx/gimp": ["X", "python", "jpeg", "png", "tiff", "svg", "pdf", "webp", "heif", "avif", "lcms", "openexr", "aalib"],
        "media-gfx/imagemagick": ["X", "jpeg", "png", "tiff", "svg", "webp", "heif", "avif", "openexr", "raw", "hdri", "opencl", "perl", "graphviz", "truetype", "fontconfig"],
        "media-gfx/inkscape": ["X", "svg", "python", "imagemagick", "spell", "jpeg", "png", "lcms"],
        "media-libs/libsdl2": ["X", "opengl", "vulkan", "alsa", "pulseaudio", "pipewire", "wayland", "haptic", "joystick"],
        "media-libs/mesa": ["X", "wayland", "opengl", "vulkan", "vaapi", "vdpau", "opencl", "gallium", "egl", "gles2", "llvm", "d3d9", "dma-buf"],
        "media-libs/opencv": ["python", "java", "opencl", "cuda", "ffmpeg", "opengl", "v4l", "gtk", "qt5", "threads", "jpeg", "png", "tiff", "webp"],
        "media-sound/audacity": ["X", "alsa", "pulseaudio", "jack", "ffmpeg", "flac", "lame", "mp3", "ogg", "vorbis", "midi", "portaudio"],
        "media-sound/mpd": ["alsa", "pulseaudio", "pipewire", "flac", "mp3", "ogg", "vorbis", "opus", "curl", "sqlite", "ffmpeg", "jack", "cdda"],
        "media-sound/pulseaudio": ["alsa", "bluetooth", "dbus", "jack", "systemd", "udev", "X", "glib", "orc", "ipv6"],
        "media-video/ffmpeg": ["X", "alsa", "jack", "pulseaudio", "vulkan", "opengl", "vaapi", "vdpau", "x264", "x265", "opus", "vpx", "dav1d", "nvenc", "openh264", "theora", "vorbis", "webp", "rtmp", "srt", "sdl2"],
        "media-video/handbrake": ["X", "gtk", "ffmpeg", "x264", "x265", "nvenc", "fdk-aac", "libass"],
        "media-video/mpv": ["X", "wayland", "opengl", "vulkan", "alsa", "pulseaudio", "pipewire", "jack", "vaapi", "vdpau", "lua", "dvd", "cdda", "sdl2", "libass"],
        "media-video/obs-studio": ["X", "wayland", "pulseaudio", "pipewire", "jack", "v4l", "lua", "python", "nvenc", "vaapi", "vlc", "browser"],
        "media-video/vlc": ["X", "alsa", "pulseaudio", "jack", "vaapi", "vdpau", "ffmpeg", "flac", "mp3", "ogg", "opus", "dvd", "bluray", "lua", "qt5", "dbus", "svg", "ssl", "avcodec", "srt", "chromecast"],
        "net-analyzer/nmap": ["ssl", "pcre", "ipv6", "lua", "nls", "ndiff", "zenmap"],
        "net-analyzer/wireshark": ["X", "qt5", "qt6", "ssl", "pcap", "lua", "zlib", "brotli", "zstd", "snappy", "http2"],
        "net-dns/bind": ["ssl", "json", "xml", "dnssec", "threads", "caps", "ipv6", "geoip"],
        "net-firewall/iptables": ["ipv6", "conntrack", "netlink", "pcap", "static-libs"],
        "net-firewall/nftables": ["json", "python", "readline", "doc"],
        "net-fs/nfs-utils": ["nfs", "kerberos", "ldap", "ipv6", "caps", "uuid", "tcpd"],
        "net-fs/samba": ["samba", "acl", "kerberos", "ldap", "systemd", "cups", "pam", "winbind", "ads", "json", "zeroconf"],
        "net-im/telegram-desktop": ["X", "dbus", "gtk", "pulseaudio", "pipewire", "openal", "webkit", "wayland", "screencast", "jemalloc"],
        "net-libs/nodejs": ["ssl", "icu", "npm", "snapshot", "inspector"],
        "net-misc/curl": ["ssh", "ssl", "http2", "http3", "ldap", "samba", "brotli", "zstd", "rtmp", "idn"],
        "net-misc/networkmanager": ["wifi", "bluetooth", "ppp", "dhcp", "modemmanager", "nss", "resolvconf", "introspection", "systemd"],
        "net-misc/openssh": ["ssl", "pam", "kerberos", "ldap", "X", "audit", "selinux", "systemd"],
        "net-vpn/openvpn": ["ssl", "pam", "lzo", "lz4", "systemd", "inotify", "pkcs11", "plugins"],
        "net-vpn/wireguard-tools": ["wg-quick", "bash-completion"],
        "net-wireless/bluez": ["bluetooth", "dbus", "systemd", "udev", "obex", "mesh", "midi"],
        "sci-libs/scipy": ["python", "numpy", "matplotlib", "lto"],
        "sys-apps/dbus": ["X", "systemd", "elogind", "selinux", "apparmor", "doc"],
        "sys-apps/portage": ["python", "rsync-verify", "ipc", "xattr", "doc", "native-extensions"],
        "sys-apps/systemd": ["systemd", "udev", "pam", "acl", "lz4", "zstd", "audit", "apparmor", "seccomp", "kmod", "elfutils", "pcre", "curl"],
        "sys-auth/pambase": ["pam", "elogind", "systemd", "gnome-keyring", "selinux"],
        "sys-boot/grub": ["efi", "device-mapper", "mount", "truetype", "themes", "doc"],
        "sys-devel/clang": ["llvm", "static-libs", "doc", "test", "xml"],
        "sys-devel/gcc": ["fortran", "openmp", "lto", "pgo", "graphite", "pie", "ssp", "hardened", "nls", "doc", "multilib", "ada", "objc", "objc++"],
        "sys-fs/btrfs-progs": ["zstd", "lzo", "zlib", "doc", "static"],
        "sys-fs/e2fsprogs": ["fuse", "threads", "nls"],
        "sys-fs/lvm2": ["device-mapper", "readline", "systemd", "udev", "thin"],
        "sys-fs/zfs": ["rootfs", "debug", "custom-cflags", "python"],
        "sys-kernel/gentoo-sources": ["symlink", "build", "deblob", "experimental"],
        "sys-kernel/linux-firmware": ["initramfs", "compress-xz", "compress-zstd", "savedconfig"],
        "sys-libs/glibc": ["multilib", "nscd", "debug", "profile", "suid", "audit", "caps"],
        "sys-process/htop": ["caps", "unicode", "sensors", "unwind", "delayacct"],
        "www-client/chromium": ["X", "wayland", "cups", "pulseaudio", "pipewire", "vaapi", "proprietary-codecs", "widevine", "hangouts", "screencast", "gtk4"],
        "www-client/firefox": ["X", "cairo", "dbus", "gtk", "pulseaudio", "wayland", "lto", "pgo", "wifi", "-minimal", "geckodriver", "screenshot", "system-av1", "pipewire", "screencast", "openh264", "jack"],
        "www-client/links": ["graphics", "svga", "X", "jpeg", "png", "tiff", "libevent", "brotli", "zstd"],
        "www-client/lynx": ["ssl", "ncurses", "brotli", "nls", "idn"],
        "www-servers/apache": ["ssl", "threads", "http2", "ldap", "doc", "suexec"],
        "www-servers/lighttpd": ["ssl", "pcre", "brotli", "zstd", "mysql", "ldap", "ipv6", "lua", "webdav"],
        "www-servers/nginx": ["http", "http2", "http3", "ssl", "pcre", "pcre2", "brotli", "threads", "rtmp", "lua", "stream", "geoip"],
        "x11-base/xorg-server": ["X", "wayland", "glamor", "udev", "elogind", "systemd", "xinerama", "suid", "xvfb"],
        "x11-libs/gtk+": ["X", "wayland", "cups", "introspection", "vim-syntax", "colord", "broadway"],
        "x11-terms/alacritty": ["X", "wayland", "vi"],
        "x11-terms/kitty": ["X", "wayland", "imagemagick", "ssh"],
        "x11-wm/awesome": ["X", "dbus", "lua", "doc"],
        "x11-wm/i3": ["X", "gaps", "startup-notification"],
        "xfce-base/xfce4-meta": ["xfce", "gtk", "dbus", "X", "pulseaudio", "upower", "udisks", "networkmanager", "bluetooth"]
    },
    "relations": {
        "kde":          { "requires": ["qt5", "dbus", "X"] },
        "gnome":        { "requires": ["gtk", "dbus", "X"] },
        "xfce":         { "requires": ["gtk", "dbus", "X"] },
        "plasma":       { "requires": ["kde", "qt5"] },
        "mate":         { "requires": ["gtk"] },
        "lxqt":         { "requires": ["qt5"] },
        "i3":           { "requires": ["X"] },
        "sway":         { "requires": ["wayland"] },
        "pulseaudio":   { "conflicts": ["pipewire"] },
        "pipewire":     { "conflicts": ["pulseaudio"] },
        "systemd":      { "conflicts": ["elogind", "consolekit", "openrc"] },
        "elogind":      { "conflicts": ["systemd"] },
        "openrc":       { "conflicts": ["systemd"] },
        "consolekit":   { "conflicts": ["systemd", "elogind"] },
        "libressl":     { "conflicts": ["openssl", "ssl"] },
        "openssl":      { "conflicts": ["libressl"] },
        "ssl":          { "conflicts": ["libressl"] },
        "graphics":     { "requires": ["X"] },
        "qml":          { "requires": ["qt5"] },
        "webkit":       { "requires": ["gtk"] },
        "webengine":    { "requires": ["qt5"] },
        "qt6":          { "requires": ["qt5"] },
        "qt5":          { "requires": ["dbus"] },
        "gtk":          { "requires": ["glib", "cairo", "pango"] },
        "gtk2":         { "requires": ["gtk"] },
        "gtk3":         { "requires": ["gtk"] },
        "gtk4":         { "requires": ["gtk"] },
        "cups":         { "requires": ["dbus"] },
        "steam":        { "requires": ["multilib", "X"] },
        "docker":       { "requires": ["device-mapper", "cgroup"] },
        "cuda":         { "conflicts": ["opencl"] },
        "vaapi":        { "conflicts": ["vdpau"] },
        "vdpau":        { "conflicts": ["vaapi"] },
        "clang":        { "requires": ["llvm"] },
        "lto":          { "requires": ["clang"] },
        "pgo":          { "requires": ["lto"] },
        "vulkan":       { "requires": ["drm"] },
        "opengl":       { "requires": ["drm"] },
        "egl":          { "requires": ["opengl"] },
        "gles2":        { "requires": ["egl"] },
        "gallium":      { "requires": ["llvm"] },
        "d3d9":         { "requires": ["gallium", "wine"] },
        "wayland":      { "conflicts": ["X"] },
        "jack":         { "requires": ["alsa"] },
        "luajit":       { "requires": ["lua"] },
        "nvenc":        { "requires": ["cuda"] },
        "spice":        { "requires": ["X"] },
        "vnc":          { "requires": ["X"] },
        "rdp":          { "requires": ["ssl"] },
        "kerberos":     { "requires": ["ssl"] },
        "ldap":         { "requires": ["ssl"] },
        "imap":         { "requires": ["ssl"] },
        "smime":        { "requires": ["ssl", "gnupg"] },
        "sasl":         { "requires": ["ssl"] },
        "smartcard":    { "requires": ["usb", "pkcs11"] },
        "pam":          { "requires": ["crypt"] },
        "selinux":      { "conflicts": ["apparmor"] },
        "apparmor":     { "conflicts": ["selinux"] },
        "seccomp":      { "requires": ["caps"] },
        "pie":          { "requires": ["hardened"] },
        "fontconfig":   { "requires": ["freetype"] },
        "xft":          { "requires": ["fontconfig", "X"] },
        "harfbuzz":     { "requires": ["freetype", "glib"] },
        "pango":        { "requires": ["harfbuzz", "fontconfig", "cairo"] },
        "cairo":        { "requires": ["freetype", "fontconfig"] },
        "gstreamer":    { "requires": ["glib"] },
        "avahi":        { "requires": ["dbus", "glib"] },
        "zeroconf":     { "requires": ["avahi"] },
        "flatpak":      { "requires": ["dbus", "ostree"] },
        "connman":      { "conflicts": ["networkmanager"] },
        "networkmanager": { "conflicts": ["connman"] },
        "fpm":          { "requires": ["php"] },
        "cgi":          { "requires": ["php"] },
        "numpy":        { "requires": ["python"] },
        "matplotlib":   { "requires": ["python", "numpy"] },
        "screencast":   { "requires": ["pipewire"] },
        "bluetooth":    { "requires": ["dbus", "udev"] },
        "ipv6":         { "requires": ["ssl"] },
        "http2":        { "requires": ["ssl"] },
        "http3":        { "requires": ["ssl", "http2"] },
        "rtmp":         { "requires": ["ssl"] },
        "srt":          { "requires": ["ssl"] },
        "btrfs":        { "conflicts": ["zfs"] },
        "zfs":          { "conflicts": ["btrfs"] },
        "jemalloc":     { "conflicts": ["tcmalloc"] },
        "tcmalloc":     { "conflicts": ["jemalloc"] },
        "readline":     { "conflicts": ["libedit"] },
        "libedit":      { "conflicts": ["readline"] },
        "aspell":       { "conflicts": ["enchant"] },
        "avx2":         { "requires": ["avx"] },
        "avx512":       { "requires": ["avx2"] },
        "sse2":         { "requires": ["sse"] },
        "sse3":         { "requires": ["sse2"] },
        "sse4":         { "requires": ["sse3"] },
        "neon":         { "requires": ["arm"] },
        "arm64":        { "requires": ["arm"] },
        "proprietary-codecs": { "requires": ["ffmpeg"] },
        "widevine":     { "requires": ["proprietary-codecs"] },
        "pcre2":        { "conflicts": ["pcre"] },
        "pcre":         { "conflicts": ["pcre2"] },
        "libvirt":      { "requires": ["qemu"] },
        "wine":         { "requires": ["multilib"] },
        "mono":         { "requires": ["dotnet"] },
        "vorbis":       { "requires": ["ogg"] },
        "theora":       { "requires": ["ogg"] }
    }
};

class SearchForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                input {
                    background-color: #333;
                    color: #00ff00;
                    border: 1px solid #00ff00;
                    padding: 0.5rem;
                    font-family: inherit;
                    width: 100%;
                    box-sizing: border-box;
                }
            </style>
            <form>
                <input type="text" placeholder="Search for a USE flag, description, or package...">
            </form>
        `;

        this.shadowRoot.querySelector('input').addEventListener('input', (e) => {
            const event = new CustomEvent('search', { detail: e.target.value });
            this.dispatchEvent(event);
        });
    }
}

class ResultsDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .results-container {
                    border: 1px solid #00ff00;
                    padding: 1rem;
                    margin-top: 1rem;
                }
                .result-item {
                    margin-bottom: 0.8rem;
                }
                .relations {
                    font-size: 0.8rem;
                    margin-top: 0.3rem;
                    padding-left: 1rem;
                }
                .requires {
                    color: #87CEEB; /* Sky Blue */
                    display: block;
                }
                .conflicts {
                    color: #FF6347; /* Tomato */
                    display: block;
                }
            </style>
            <div class="results-container">
                <!-- Search results will be displayed here -->
            </div>
        `;
    }

    renderResults(query) {
        let html = '';
        if (!query) {
            this.shadowRoot.querySelector('.results-container').innerHTML = html;
            return;
        }

        const lowerCaseQuery = query.toLowerCase();

        // Search in flags
        for (const [flag, description] of Object.entries(mockData.flags)) {
            if (flag.toLowerCase().includes(lowerCaseQuery) || description.toLowerCase().includes(lowerCaseQuery)) {
                html += `<div class="result-item"><strong>${flag}</strong>: ${description}`;

                const relations = mockData.relations[flag];
                if (relations) {
                    html += `<div class="relations">`;
                    if (relations.requires) {
                        html += `<span class="requires">Requires: ${relations.requires.join(', ')}</span>`;
                    }
                    if (relations.conflicts) {
                        html += `<span class="conflicts">Conflicts: ${relations.conflicts.join(', ')}</span>`;
                    }
                    html += `</div>`;
                }

                html += `</div>`;
            }
        }

        // Search in packages
        for (const [pkg, flags] of Object.entries(mockData.packages)) {
            if (pkg.toLowerCase().includes(lowerCaseQuery)) {
                html += `<div class="result-item"><strong>${pkg}</strong>: ${flags.join(', ')}</div>`;
            }
        }

        this.shadowRoot.querySelector('.results-container').innerHTML = html;
    }
}

class AllFlagsDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .all-flags-container {
                    columns: 4;
                    column-gap: 1.5rem;
                }
                .flag-item {
                    margin-bottom: 0.8rem;
                    break-inside: avoid-column;
                }
                .relations {
                    font-size: 0.8rem;
                    margin-top: 0.3rem;
                }
                .requires {
                    color: #87CEEB; /* Sky Blue */
                    display: block;
                }
                .conflicts {
                    color: #FF6347; /* Tomato */
                    display: block;
                }
            </style>
            <div class="all-flags-container">
            </div>
        `;
        this.renderAllFlags();
    }

    renderAllFlags() {
        let html = '';
        const sortedFlags = Object.entries(mockData.flags).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

        for (const [flag, description] of sortedFlags) {
            html += `<div class="flag-item"><strong>${flag}</strong>: ${description}`;

            const relations = mockData.relations[flag];
            if (relations) {
                html += `<div class="relations">`;
                if (relations.requires) {
                    html += `<span class="requires">Requires: ${relations.requires.join(', ')}</span>`;
                }
                if (relations.conflicts) {
                    html += `<span class="conflicts">Conflicts: ${relations.conflicts.join(', ')}</span>`;
                }
                html += `</div>`;
            }
            html += `</div>`;
        }
        this.shadowRoot.querySelector('.all-flags-container').innerHTML = html;
    }
}

customElements.define('search-form', SearchForm);
customElements.define('results-display', ResultsDisplay);
customElements.define('all-flags-display', AllFlagsDisplay);

const searchSection = document.getElementById('search-section');
const allFlagsSection = document.getElementById('all-flags-section');
const searchBtn = document.getElementById('search-btn');
const allFlagsBtn = document.getElementById('all-flags-btn');

searchBtn.addEventListener('click', () => {
    searchSection.classList.remove('hidden');
    allFlagsSection.classList.add('hidden');
    searchBtn.classList.add('active');
    allFlagsBtn.classList.remove('active');
});

allFlagsBtn.addEventListener('click', () => {
    searchSection.classList.add('hidden');
    allFlagsSection.classList.remove('hidden');
    searchBtn.classList.remove('active');
    allFlagsBtn.classList.add('active');
});

document.querySelector('search-form').addEventListener('search', (e) => {
    document.querySelector('results-display').renderResults(e.detail);
});

// Set initial state
searchBtn.classList.add('active');
