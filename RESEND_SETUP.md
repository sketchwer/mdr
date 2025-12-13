# Resend Email Setup Instructions

Contact form se emails bhejne ke liye Resend setup karein:

## Steps:

1. **Resend Account Banayein:**
   - https://resend.com/ par jao
   - Free account banayein (100 emails/day free)

2. **API Key Generate Karein:**
   - Dashboard se "API Keys" section me jao
   - "Create API Key" click karein
   - API key copy karein

3. **Domain Verify Karein (Optional but Recommended):**
   - "Domains" section me jao
   - Apna domain add karein (e.g., macroencoder.com)
   - DNS records add karein domain provider me
   - Domain verify hone ke baad, "from" email me apna domain use kar sakte ho

4. **Environment Variable Set Karein:**
   - Project root me `.env` file create karein:
   ```
   REACT_APP_RESEND_API_KEY=re_your_api_key_here
   ```

5. **From Email Update Karein:**
   - `ContactForm.js` me line 47 par "from" email update karein
   - Agar domain verify nahi kiya, to `onboarding@resend.dev` use karein (temporary)
   - Domain verify karne ke baad, apna domain use karein (e.g., `noreply@macroencoder.com`)

## Important Notes:

- **API Key Security:** Frontend me API key expose hota hai, isliye production me backend API endpoint use karein (recommended)
- **Rate Limits:** Free plan me 100 emails/day limit hai
- **Domain Verification:** Production me domain verify karna recommended hai

## Testing:

1. `.env` file me API key add karein
2. Server restart karein (`npm start`)
3. Contact form fill karein aur submit karein
4. Dono emails check karein:
   - support@macroencoder.com
   - amankk0007@gmail.com

