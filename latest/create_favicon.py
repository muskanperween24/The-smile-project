from PIL import Image, ImageDraw
import os

def create_circular_favicon():
    # Input and output paths
    input_path = "/home/a/Desktop/The smile/The-smile-project/latest/public/images/logo.jpg"
    output_path = "/home/a/Desktop/The smile/The-smile-project/latest/public/favicon.png"
    
    try:
        # Open the original image
        img = Image.open(input_path)
        
        # Convert to RGBA if not already
        img = img.convert("RGBA")
        
        # Resize to favicon size (32x32 is common)
        size = (32, 32)
        img = img.resize(size, Image.Resampling.LANCZOS)
        
        # Create a circular mask
        mask = Image.new('L', size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + size, fill=255)
        
        # Apply the mask to make it circular
        output = Image.new('RGBA', size, (0, 0, 0, 0))
        output.paste(img, (0, 0))
        output.putalpha(mask)
        
        # Save as PNG (supports transparency)
        output.save(output_path, "PNG")
        print(f"Circular favicon created successfully at {output_path}")
        
    except Exception as e:
        print(f"Error creating circular favicon: {e}")

if __name__ == "__main__":
    create_circular_favicon()