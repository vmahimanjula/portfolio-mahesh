import './AuroraBackground.css';

/**
 * Fixed full-screen animated background:
 * drifting aurora blobs + a subtle grid + noise overlay.
 */
export default function AuroraBackground() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora__grid" />
      <div className="aurora__blob aurora__blob--1" />
      <div className="aurora__blob aurora__blob--2" />
      <div className="aurora__blob aurora__blob--3" />
      <div className="aurora__noise" />
    </div>
  );
}
