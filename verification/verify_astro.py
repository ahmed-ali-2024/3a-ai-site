from playwright.sync_api import sync_playwright

def verify_astro_build():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:4321")

            # Wait for content
            page.wait_for_selector("h1")

            # Verify Title
            title = page.title()
            print(f"Page Title: {title}")

            # Verify Logo in Navbar
            logo = page.locator("nav img[alt='3A-AI Logo']")
            if logo.is_visible():
                print("Navbar Logo is visible")
                logo.screenshot(path="verification/astro_logo_navbar.png")
            else:
                print("Navbar Logo is NOT visible")

            # Verify Sections
            page.locator("#services").scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/astro_services.png")

            page.locator("#projects").scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/astro_projects.png")

            page.locator("#vision").scroll_into_view_if_needed()
            page.wait_for_timeout(1000)
            page.screenshot(path="verification/astro_vision.png")

            print("Screenshots taken.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_astro_build()
