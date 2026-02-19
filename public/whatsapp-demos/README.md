# WhatsApp Bot Demonstrations

This folder contains video demonstrations of the ProSaaS WhatsApp bot in action.

## File Format
- **Recommended format**: MP4 (H.264 codec)
- **Alternative formats**: WebM, MOV
- **Resolution**: 720p or 1080p recommended
- **File naming**: Use descriptive names in Hebrew or English

## Adding New Demonstrations

### 1. Upload Video File
Place your video file in this directory with a descriptive name:
```
whatsapp-demos/
  ├── demo-1.mp4
  ├── demo-2.mp4
  └── ...
```

That's it! The site **automatically discovers** all video files in this folder via the `/api/whatsapp-demos` endpoint — no code changes required.

The display title is generated automatically from the filename (e.g. `customer-call.mp4` → `customer call`).

### 2. Test Your Changes
1. Run the development server: `npm run dev`
2. Navigate to the WhatsApp Demos section
3. Verify the video appears and plays correctly

## Best Practices
- Keep video files under 50MB for better performance
- Use descriptive titles and descriptions in Hebrew
- Add relevant tags to help users find specific scenarios
- Test videos on multiple devices and browsers
- Consider adding subtitles for better accessibility

## Example Scenarios
Consider creating demonstrations for:
- Initial lead qualification
- Appointment scheduling
- FAQ handling
- Order status inquiries
- Technical support
- Customer feedback collection
- Product information requests

## Technical Notes
- Videos are cached using the ASSET_VERSION parameter
- The component uses explicit file mapping for security
- Videos support standard HTML5 video controls
- Mobile-friendly responsive design
