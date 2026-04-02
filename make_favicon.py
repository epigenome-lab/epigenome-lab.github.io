from PIL import Image
import os

src = "favicon_orig.png"
if not os.path.exists(src):
    print(f"ERROR: {src} not found. Please place your source image here first.")
    exit(1)

img = Image.open(src).convert("RGBA")

# favicon.ico (16, 32, 48px multi-size)
img.save(
    "favicon.ico",
    format="ICO",
    sizes=[(16, 16), (32, 32), (48, 48)]
)
print("✓ favicon.ico created (16x16, 32x32, 48x48)")

# apple-touch-icon.png (180x180)
img.resize((180, 180), Image.LANCZOS).save("apple-touch-icon.png", format="PNG")
print("✓ apple-touch-icon.png created (180x180)")

# 추가: 192x192 for Android
img.resize((192, 192), Image.LANCZOS).save("icon-192.png", format="PNG")
print("✓ icon-192.png created (192x192)")

print("\nDone! All favicon files are ready.")
