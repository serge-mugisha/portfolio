/* eslint-disable import/no-anonymous-default-export */
import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default {
  instagram: ({ width, height, color }: IconProps) => (
    <svg
      className="social instagram"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
        fill={color}
      />
      <path
        d="M15.998 12.999A3.008 3.008 0 0012.996 16a3.008 3.008 0 003.002 3.001A3.008 3.008 0 0018.999 16a3.008 3.008 0 00-3.001-3.001zM24.999 16c0-1.243.012-2.474-.058-3.715-.07-1.441-.399-2.72-1.452-3.774-1.056-1.056-2.333-1.382-3.774-1.452-1.243-.07-2.474-.058-3.715-.058-1.243 0-2.474-.012-3.715.058-1.441.07-2.72.399-3.774 1.452-1.056 1.056-1.382 2.333-1.452 3.774-.07 1.243-.058 2.474-.058 3.715 0 1.24-.012 2.474.058 3.715.07 1.441.399 2.72 1.452 3.774 1.056 1.055 2.333 1.382 3.774 1.452 1.243.07 2.474.058 3.715.058 1.243 0 2.474.012 3.715-.058 1.441-.07 2.72-.399 3.774-1.452 1.055-1.056 1.382-2.333 1.452-3.774.072-1.24.058-2.472.058-3.715zm-9.001 4.618A4.611 4.611 0 0111.38 16a4.611 4.611 0 014.618-4.618A4.611 4.611 0 0120.616 16a4.611 4.611 0 01-4.618 4.618zm4.807-8.346a1.077 1.077 0 01-1.079-1.079c0-.597.482-1.079 1.079-1.079a1.077 1.077 0 01.413 2.076 1.076 1.076 0 01-.413.082z"
        fill={color}
      />
    </svg>
  ),
  github: ({ width, height, color }: IconProps) => (
    <svg
      className="social github"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.375 11.917c.163-.376.688-1.865-.163-3.883 0 0-1.312-.387-4.3 1.525-1.25-.328-2.587-.375-3.912-.375-1.325 0-2.662.047-3.912.375-2.988-1.924-4.3-1.525-4.3-1.525-.85 2.018-.325 3.507-.163 3.883C6.612 12.937 6 14.252 6 15.847c0 6.04 4.162 7.402 9.975 7.402S26 21.887 26 15.846c0-1.595-.613-2.91-1.625-3.93zM16 22.099c-4.125 0-7.475-.176-7.475-3.93 0-.89.475-1.736 1.275-2.428 1.338-1.15 3.625-.54 6.2-.54 2.588 0 4.85-.61 6.2.54.813.692 1.275 1.525 1.275 2.429 0 3.741-3.35 3.929-7.475 3.929zm-3.137-5.877c-.825 0-1.5.939-1.5 2.088 0 1.15.674 2.1 1.5 2.1.825 0 1.5-.939 1.5-2.1 0-1.162-.675-2.088-1.5-2.088zm6.274 0c-.825 0-1.5.926-1.5 2.088 0 1.161.675 2.1 1.5 2.1s1.5-.939 1.5-2.1c0-1.162-.662-2.088-1.5-2.088z"
        fill={color}
      />
    </svg>
  ),
  linkedin: ({ width, height, color }: IconProps) => (
    <svg
      className="social linkedin"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
        fill={color}
      />
      <path
        d="M23.36 8H8.64a.64.64 0 00-.64.64v14.72c0 .354.286.64.64.64h14.72a.64.64 0 00.64-.64V8.64a.64.64 0 00-.64-.64zM12.746 21.634h-2.374v-7.636h2.374v7.636zm-1.186-8.68a1.376 1.376 0 110-2.752 1.376 1.376 0 010 2.752zm10.074 8.68h-2.372V17.92c0-.886-.016-2.024-1.234-2.024-1.234 0-1.424.964-1.424 1.96v3.778h-2.37v-7.636h2.276v1.044h.032c.316-.6 1.09-1.234 2.246-1.234 2.404 0 2.846 1.582 2.846 3.638v4.188z"
        fill={color}
      />
    </svg>
  ),
  dribbble: ({ width, height, color }: IconProps) => (
    <svg
      className="social dribbble"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
        fill={color}
      />
      <path
        d="M12.393 7.757a8.996 8.996 0 018.675.802 13.272 13.272 0 01-3.858 3.507 14.662 14.662 0 00-4.816-4.309zm3.58 4.963a13.252 13.252 0 00-5.035-4.152 9.042 9.042 0 00-3.598 4.986 13.144 13.144 0 008.632-.834zM25 15.462a8.988 8.988 0 00-2.849-6.036 14.669 14.669 0 01-4.192 3.806 14.5 14.5 0 011.173 2.59 14.566 14.566 0 015.868-.36zm-5.486 1.692a14.541 14.541 0 01-.141 7.21 9.03 9.03 0 005.602-7.505 13.2 13.2 0 00-5.46.295zm-1.701-.906a13.106 13.106 0 00-1.073-2.356 14.463 14.463 0 01-6.275 1.423c-1.144 0-2.285-.134-3.398-.401a9 9 0 003.114 7.959 14.636 14.636 0 017.632-6.625zm-6.5 7.445a9.002 9.002 0 006.46 1.15c.49-1.4.74-2.873.74-4.357 0-.975-.108-1.947-.323-2.899a13.243 13.243 0 00-6.877 6.107z"
        fill={color}
      />
    </svg>
  ),
  behance: ({ width, height, color }: IconProps) => (
    <svg
      className="social behance"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z"
        clipRule="evenodd"
        opacity={0.1}
      />
      <path
        fill={color}
        d="M14.493 17.487c0 .775-.562 1.02-1.253 1.02h-1.812v-2.125h1.848c.747.004 1.217.313 1.217 1.105Zm-.31-3.307c0-.711-.55-.88-1.16-.88h-1.591v1.8h1.715c.607 0 1.037-.265 1.037-.92Zm5.317.932c-.736 0-1.226.458-1.274 1.193h2.499c-.068-.743-.454-1.193-1.225-1.193ZM25 8.93v14.14A1.929 1.929 0 0 1 23.071 25H8.93A1.93 1.93 0 0 1 7 23.071V8.93A1.93 1.93 0 0 1 8.929 7H23.07A1.93 1.93 0 0 1 25 8.929Zm-7.084 4.218h3.126v-.76h-3.126v.76ZM16.19 17.58c0-.968-.458-1.804-1.406-2.073.69-.33 1.052-.711 1.052-1.487 0-1.535-1.145-1.908-2.467-1.908H9.732v7.714h3.74c1.403-.008 2.717-.679 2.717-2.246Zm6.079-.595c0-1.651-.968-3.03-2.716-3.03-1.704 0-2.857 1.279-2.857 2.958 0 1.74 1.097 2.933 2.857 2.933 1.334 0 2.198-.599 2.615-1.88h-1.354c-.148.478-.747.727-1.213.727-.9 0-1.37-.526-1.37-1.418h4.026c.004-.093.012-.193.012-.29Z"
      />
    </svg>
  ),
  bars: ({ width, height, color }: IconProps) => (
    <svg
      className="bars"
      width={width}
      height={height}
      viewBox="0 0 30 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 21.25v2.5c0 .338-.124.631-.371.879-.248.247-.54.371-.879.371H1.25c-.339 0-.632-.124-.879-.371A1.201 1.201 0 010 23.75v-2.5c0-.338.124-.631.371-.879.247-.247.54-.371.879-.371h27.5c.338 0 .631.124.879.371.247.248.371.54.371.879zm0-10v2.5c0 .338-.124.632-.371.879-.248.247-.54.371-.879.371H1.25c-.339 0-.632-.124-.879-.371A1.201 1.201 0 010 13.75v-2.5c0-.338.124-.632.371-.879S.911 10 1.25 10h27.5c.338 0 .631.124.879.371.247.247.371.54.371.879zm0-10v2.5c0 .339-.124.632-.371.879-.248.247-.54.371-.879.371H1.25c-.339 0-.632-.124-.879-.371A1.201 1.201 0 010 3.75v-2.5C0 .911.124.618.371.371S.911 0 1.25 0h27.5c.338 0 .631.124.879.371.247.247.371.54.371.879z"
        fill={color}
      />
    </svg>
  ),
  designing: ({ width, height, color }: IconProps) => (
    <svg
      className="designing"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.648 0H.352A.352.352 0 000 .352v3.616c0 .194.157.351.352.351h17.296A.352.352 0 0018 3.968V.352A.352.352 0 0017.648 0zm-.351 3.616H.703V.703h16.594v2.913z"
        fill="#232323"
      />
      <path
        d="M16.503 2.818l-.288-.288a1.116 1.116 0 00-.209-1.3 1.124 1.124 0 00-1.917.795c0 .3.117.582.33.794a1.116 1.116 0 001.3.209l.286.287a.35.35 0 10.498-.497zm-.994-.496a.417.417 0 01-.594 0 .417.417 0 010-.594.419.419 0 01.718.297.417.417 0 01-.123.297zM12.598 2.727a.355.355 0 00-.276-.276.348.348 0 00-.361.15.364.364 0 00-.06.195.347.347 0 00.157.292.358.358 0 00.264.053.352.352 0 00.276-.414zM10.92 2.445H3.614a.352.352 0 000 .703h7.306a.352.352 0 100-.703zM11.068 4.82H.393a.352.352 0 00-.351.352v6.933c0 .194.157.351.351.351h10.675a.352.352 0 00.351-.351V5.172a.352.352 0 00-.351-.352zm-6.786 6.933H1.298l2.01-2.327 1.455 1.686-.48.641zm.88 0l.655-.874H7.52a.352.352 0 100-.703H6.344l.247-.329h2.207l1.43 1.906H5.16zm1.956-2.609l.576-.768.577.768H7.118zm3.598 2.089l-2.74-3.654a.352.352 0 00-.563 0l-2.218 2.957-1.621-1.877a.352.352 0 00-.532 0l-2.297 2.66V5.523h9.971v5.709z"
        fill="#232323"
      />
      <path
        d="M4.84 5.927c-.686 0-1.244.558-1.244 1.243s.558 1.243 1.243 1.243 1.243-.558 1.243-1.243-.558-1.243-1.243-1.243zm0 1.783a.54.54 0 110-1.08.54.54 0 010 1.08zM17.648 4.82h-5.403a.352.352 0 00-.351.352v6.933c0 .194.157.351.351.351h5.403a.352.352 0 00.352-.351V5.172a.352.352 0 00-.352-.352zm-.351 6.933h-4.7v-6.23h4.7v6.23z"
        fill="#232323"
      />
      <path
        d="M16.478 6.103h-3.063a.352.352 0 100 .703h3.063a.352.352 0 100-.703zM16.478 7.514h-3.063a.352.352 0 100 .703h3.063a.352.352 0 100-.703zM16.478 8.925h-3.063a.352.352 0 100 .703h3.063a.352.352 0 100-.703zM13.76 10.618a.347.347 0 00-.096-.18.354.354 0 00-.54.054.362.362 0 00-.053.264.357.357 0 00.21.256.361.361 0 00.135.027.353.353 0 00.344-.42zM16.478 10.335h-1.73a.352.352 0 000 .704h1.73a.352.352 0 000-.704zM5.796 12.955H.393a.352.352 0 00-.351.352v3.62c0 .195.157.352.351.352h5.403a.352.352 0 00.352-.351v-3.621a.352.352 0 00-.352-.352zm-.351 3.621h-4.7v-2.918h4.7v2.918zM17.648 12.955H7.022a.352.352 0 00-.352.352v3.62c0 .195.157.352.352.352h10.626a.352.352 0 00.352-.351v-3.621a.352.352 0 00-.352-.352zm-.351 3.621H7.373v-2.918h9.924v2.918z"
        fill="#232323"
      />
      <path
        d="M8.975 15.049a.356.356 0 00-.276-.277.361.361 0 00-.204.02.361.361 0 00-.157.13.349.349 0 00-.033.33.357.357 0 00.077.114.354.354 0 00.497 0 .335.335 0 00.076-.114.368.368 0 00.02-.203zM15.867 14.766H9.963a.352.352 0 100 .703h5.904a.352.352 0 100-.703z"
        fill="#232323"
      />
    </svg>
  ),
  testing: ({ width, height, color }: IconProps) => (
    <svg
      className="testing"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4 4.758V1.487A1.495 1.495 0 0012.9 0H5.1a1.495 1.495 0 00-1.5 1.487v.892h10.2v2.379h.6zM4.2 1.784v-.297c0-.493.403-.892.9-.892h7.8c.497 0 .9.4.9.892v.297H4.2zM13.8 14.867H4.2v-2.973h-.6v4.46c.001.82.672 1.486 1.5 1.487h7.8a1.495 1.495 0 001.5-1.487v-2.676h-.6v1.19zm-.9 2.38H5.1c-.497 0-.9-.4-.9-.893v-.892h9.6v.892a.896.896 0 01-.9.892z"
        fill={color}
      />
      <path
        d="M8.7 16.057h.6v.594h-.6v-.594zM8.7 2.973h1.5v.595H8.7v-.595zM8.7 4.163h4.2v.595H8.7v-.595zM5.1 12.786v1.19c0 .163.134.297.3.297h2.4c.166 0 .3-.133.3-.298v-2.378a.299.299 0 00-.3-.298H6.6v.595h.9v1.784H5.7v-.892h-.6zM8.7 12.489h.9v.594h-.9v-.594zM8.7 13.678h3v.595h-3v-.595z"
        fill={color}
      />
      <path
        d="M1.2 10.11h1.406l2.922 2.027c.11.076.257.071.361-.013a.296.296 0 00.087-.347l-.72-1.667H6.9c.663 0 1.2-.533 1.2-1.19V4.163c0-.657-.537-1.19-1.2-1.19H1.2c-.663 0-1.2.533-1.2 1.19V8.92c0 .657.537 1.19 1.2 1.19zM.6 4.163c0-.329.269-.595.6-.595h5.7c.331 0 .6.266.6.595V8.92a.597.597 0 01-.6.595H4.8a.3.3 0 00-.25.134.295.295 0 00-.026.28l.486 1.123-2.137-1.483a.301.301 0 00-.173-.054H1.2a.597.597 0 01-.6-.595V4.163zM16.8 5.352H8.7v.595h1.067a1.17 1.17 0 00-.167.595v.594h-.9v.595h.9v.595h-.9v.594h.9v.595h-.9v.595h.9v.595c.001.209.059.414.167.594H8.7v.595h4.084l-.469 1.393c-.04.12.002.252.103.329.101.077.24.082.347.012l2.625-1.734h1.41c.663 0 1.2-.533 1.2-1.19V6.542c0-.657-.537-1.19-1.2-1.19zm.6 5.352a.597.597 0 01-.6.595h-1.5a.304.304 0 00-.167.05l-1.972 1.303.324-.962a.295.295 0 00-.042-.267.3.3 0 00-.243-.124h-2.4a.597.597 0 01-.6-.595V6.542c0-.329.269-.595.6-.595h6c.331 0 .6.266.6.595v4.162z"
        fill={color}
      />
      <path
        d="M1.5 8.92h4.38c.398 0 .72-.32.72-.713V6.66a.717.717 0 00-.72-.714H5.1v-.595c0-.657-.537-1.19-1.2-1.19-.331 0-.6.267-.6.596v.768l-.424.42H1.5c-.166 0-.3.134-.3.298v2.379c0 .164.134.297.3.297zm2.312-3.06a.296.296 0 00.088-.21v-.892c.331 0 .6.266.6.594v.595c-.166 0-.3.133-.3.297 0 .164.134.298.3.298h1.38A.12.12 0 016 6.66v1.546a.12.12 0 01-.12.119H3.3V6.367l.512-.507zM1.8 6.542h.9v1.784h-.9V6.542zM10.8 8.028v.298h.6v-.298c0-.164.134-.297.3-.297v-.595c-.497 0-.9.4-.9.892zM12 8.028v.298h.6v-.298c0-.164.134-.297.3-.297v-.595c-.497 0-.9.4-.9.892zM16.2 7.434a.299.299 0 01-.3.297v.595c.497 0 .9-.4.9-.892v-.298h-.6v.298zM15 7.434a.299.299 0 01-.3.297v.595c.497 0 .9-.4.9-.892v-.298H15v.298zM12 9.812h.6v.595H12v-.595zM13.2 9.812h.6v.595h-.6v-.595zM14.4 9.812h.6v.595h-.6v-.595zM10.8 2.973h2.1v.595h-2.1v-.595zM10.2 12.489h1.5v.594h-1.5v-.594z"
        fill={color}
      />
    </svg>
  ),
  ideating: ({ width, height, color }: IconProps) => (
    <svg
      className="ideating"
      width={width}
      height={height}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.28 16.56c.03 0 .059-.004.087-.01l1.44-.36a.36.36 0 10-.174-.7l-.859.215.577-2.297a.36.36 0 00-.699-.175l-.72 2.88a.36.36 0 00.348.447zM5.76 14.4c1.346 0 1.772-1.643 1.79-1.713a.36.36 0 00-.7-.175c-.002.012-.307 1.168-1.09 1.168-.783 0-1.088-1.156-1.09-1.168a.36.36 0 00-.7.175c.018.07.444 1.713 1.79 1.713zM12.24 14.4c1.345 0 1.772-1.643 1.79-1.713a.36.36 0 00-.7-.175c-.002.012-.307 1.168-1.09 1.168-.783 0-1.088-1.156-1.09-1.168a.36.36 0 00-.7.175c.018.07.444 1.713 1.79 1.713z"
        fill={color}
      />
      <path
        d="M1.476 14.724a7.556 7.556 0 0015.051 0C17.363 14.538 18 13.658 18 12.6c0-1.044-.62-1.915-1.44-2.116V8.28c0-1.282-3.847-1.648-5.63-1.748.066-.105.15-.22.238-.34A4.639 4.639 0 0012.24 3.24a3.24 3.24 0 10-6.48 0 4.638 4.638 0 001.072 2.952c.088.12.171.235.238.34-1.783.1-5.63.466-5.63 1.748v2.204C.62 10.684 0 11.556 0 12.6c0 1.058.637 1.938 1.476 2.124zm15.084-3.475c.474.28.752.801.72 1.351a1.47 1.47 0 01-.72 1.351V11.25zM6.48 3.24a2.52 2.52 0 115.04 0 3.904 3.904 0 01-.933 2.526 1.916 1.916 0 00-.507 1.074v1.08h-.72V7.2a.36.36 0 000-.72V3.96A.36.36 0 009 3.6a.36.36 0 11.36-.36.36.36 0 00.72 0 1.08 1.08 0 10-1.44 1.014V6.48a.36.36 0 000 .72v.72h-.72V6.84a1.916 1.916 0 00-.507-1.074c-.6-.705-.931-1.6-.933-2.526zM2.16 8.294c.128-.292 1.728-.875 5.04-1.047V8.28c0 .199.161.36.36.36h2.88a.36.36 0 00.36-.36V7.247c3.323.173 4.926.759 5.042 1.016-.159.394-2.58 1.097-6.842 1.097-4.248 0-6.67-.7-6.84-1.06v-.006zm0 .836c1.84.936 6.591.95 6.84.95.249 0 5-.014 6.84-.95v4.91a6.84 6.84 0 11-13.68 0V9.13zm-.72 2.119v2.702A1.47 1.47 0 01.72 12.6a1.47 1.47 0 01.72-1.351z"
        fill={color}
      />
    </svg>
  ),
  framing: ({ width, height, color }: IconProps) => (
    <svg
      className="framing"
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.626 12.77v-2.098a.352.352 0 00-.352-.351H12.18a1.4 1.4 0 00-1.395-1.295 1.4 1.4 0 00-1.395 1.295H7.685V8.343a.352.352 0 00-.352-.352h-.247a.696.696 0 010-1.391h.247a.352.352 0 00.352-.352V3.803a.352.352 0 00-.352-.351H.352A.352.352 0 000 3.803v13.854c0 .194.158.352.352.352h13.922a.352.352 0 00.352-.352V15.56a1.4 1.4 0 001.294-1.395 1.4 1.4 0 00-1.294-1.396zM6.98 4.154V5.9a1.401 1.401 0 00-1.294 1.396c0 .736.571 1.342 1.294 1.395v1.63H4.89a.352.352 0 00-.351.351v.248a.696.696 0 01-1.391 0v-.248a.352.352 0 00-.352-.351H.703V4.155h6.278zm-6.278 6.87h1.744a1.4 1.4 0 001.395 1.294 1.4 1.4 0 001.395-1.295h1.744v2.093c0 .194.157.352.352.352h.247a.696.696 0 010 1.392h-.247a.352.352 0 00-.352.351v2.093H.703v-6.28zm13.818 3.835h-.247a.352.352 0 00-.351.352v2.093H7.683V15.56a1.4 1.4 0 001.295-1.395 1.4 1.4 0 00-1.295-1.396v-1.745h2.053a.352.352 0 00.351-.352v-.247a.696.696 0 011.391 0v.247c0 .195.158.352.352.352h2.091v2.093c0 .194.158.352.352.352h.247a.696.696 0 010 1.392z"
        fill={color}
      />
      <path
        d="M17.648 0h-6.98a.352.352 0 00-.352.352v2.096A1.401 1.401 0 009.02 3.844a1.4 1.4 0 001.295 1.395v2.097c0 .195.157.352.351.352h2.444a.352.352 0 00.351-.352V7.09a.696.696 0 011.391 0v.247c0 .195.158.352.352.352h2.443A.352.352 0 0018 7.336V.352A.352.352 0 0017.648 0zm-.351 6.985h-1.744a1.4 1.4 0 00-1.395-1.295 1.4 1.4 0 00-1.395 1.295h-1.744V4.892a.352.352 0 00-.352-.352h-.247a.697.697 0 010-1.392h.247a.352.352 0 00.352-.352V.703h6.278v6.282z"
        fill={color}
      />
    </svg>
  ),
  iterating: ({ width, height, color }: IconProps) => (
    <svg
      className="iterating"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.46 15.14l-2.129-1.33H9.154a.853.853 0 00.053-.287.857.857 0 00-.225-.576.86.86 0 00.172-.288h6.095a1.44 1.44 0 001.438-1.438V6.617A1.44 1.44 0 0015.25 5.18h-3.75C11.395 2.306 9.032 0 6.135 0h-.186A5.38 5.38 0 00.575 5.374c0 1.435.56 2.785 1.575 3.8l.37.37c.546.547.867 1.258.921 2.021a.861.861 0 00-.564.807c0 .222.087.422.225.575a.856.856 0 00-.225.576c0 .1.02.197.053.287h-.916C.904 13.81 0 14.714 0 15.824c0 1.11.903 2.014 2.014 2.014h13.317l2.128-1.33a.803.803 0 00.38-.684.803.803 0 00-.38-.684zM2.876 16.687h11.619l.287.576H2.877v-.576zm11.677-.575H2.877v-.575h11.677l.288.287-.288.288zm-.058-1.15H2.877v-.576h11.906l-.287.575zm-11.043-2.59c0-.16.129-.288.287-.288h4.604a.288.288 0 010 .575H3.74a.288.288 0 01-.287-.287zm12.659-5.755v4.604a.864.864 0 01-.863.863H9.154a.862.862 0 00-.511-.519 3.161 3.161 0 01.921-2.021l.37-.37a5.329 5.329 0 001.556-3.42h3.759c.476 0 .863.388.863.863zM2.556 8.767a4.768 4.768 0 01-1.405-3.393A4.804 4.804 0 015.949.575h.186a4.8 4.8 0 014.788 4.604h-2.46l1.056-1.057a.899.899 0 00-.99-1.459l-.597-.595-.503.24a3.054 3.054 0 00-.135-.056l-.185-.526H4.975l-.185.526c-.045.017-.09.036-.136.056l-.502-.24-1.51 1.508.241.503a3.05 3.05 0 00-.056.136l-.525.185v2.133l.525.186.056.135-.24.503 1.509 1.509.503-.24c.045.02.09.038.135.056l.185.525H7.11l.185-.526a3.87 3.87 0 00.136-.056l.503.24.596-.596a.899.899 0 00.99-1.459L8.463 5.755h2.452a4.762 4.762 0 01-1.387 3.013l-.37.37A3.731 3.731 0 008.07 11.51H4.014a3.73 3.73 0 00-1.088-2.372l-.37-.37zm.904-2.038c-.053-.109-.1-.22-.137-.33l-.046-.132-.4-.141v-1.32l.4-.14.046-.132c.038-.11.084-.221.137-.33l.062-.125-.184-.384.933-.933.384.184.125-.062c.109-.053.22-.1.33-.137l.132-.045.14-.4h1.32l.141.4.132.045c.11.038.221.084.33.138l.125.061.384-.183.263.263-.625.624a2.282 2.282 0 00-1.41-.485A2.304 2.304 0 003.74 5.467a2.304 2.304 0 002.302 2.301c.518 0 1.008-.171 1.41-.485l.624.625-.263.263-.383-.184-.125.062c-.109.053-.22.1-.33.137l-.132.045-.142.4H5.382l-.141-.4-.131-.045a2.854 2.854 0 01-.33-.137l-.126-.062-.384.184-.933-.933.184-.384-.06-.125zm2.87-.568l.711.712c-.29.207-.635.32-.999.32a1.728 1.728 0 01-1.726-1.726c0-.952.774-1.727 1.726-1.727.364 0 .71.113 1 .32l-.712.712a.976.976 0 00-.288.695c0 .262.102.509.288.694zm2.326 1.513l-1.92-1.92a.41.41 0 010-.575l1.92-1.92a.323.323 0 01.456.456l-1.75 1.752 1.75 1.75a.323.323 0 01-.456.456zm-5.203 5.849c0-.16.129-.288.287-.288h4.604a.288.288 0 010 .575H3.74a.288.288 0 01-.287-.287zM.575 15.824a1.44 1.44 0 011.439-1.438h.288v2.877h-.288a1.44 1.44 0 01-1.439-1.439zm16.58.197l-1.79 1.118-.341-.682.632-.633-.632-.632.34-.682 1.79 1.118a.231.231 0 010 .393zM15.64 3.807l.368.442L18 2.589 16.008.93l-.368.443 1.116.93h-4.097v.575h4.097l-1.116.93z"
        fill={color}
      />
      <path
        d="M11.509 2.302h.575v.575h-.575v-.575zM14.454 9.782h-4.096v.576h4.096l-1.116.93.369.442 1.991-1.66-1.991-1.66-.369.442 1.116.93z"
        fill={color}
      />
    </svg>
  ),
  learnings: ({ width, height, color }: IconProps) => (
    <svg
      className="iterating"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.548 4.935c.16 0 .29.13.29.29h.581a.872.872 0 00-1.742 0h.581c0-.16.13-.29.29-.29zM9.871 4.935c.16 0 .29.13.29.29h.58a.872.872 0 00-1.741 0h.58c0-.16.131-.29.291-.29zM10.161 6.097v-.29H7.258v.29c0 .8.651 1.451 1.452 1.451.8 0 1.451-.65 1.451-1.451zm-2.273.29h1.643a.873.873 0 01-1.643 0z"
        fill={color}
      />
      <path
        d="M16.61 2.032c-.683 0-1.26.49-1.372 1.162l-.104.622a.87.87 0 00-.618.83v.68c0 .387.151.752.425 1.026l.156.155V8.06a1.232 1.232 0 01-1.23 1.23h-3.468l-.191-.955a3.21 3.21 0 001.473-1.658h.222a1.162 1.162 0 000-2.322v-.727a1.89 1.89 0 001.162-1.74A1.89 1.89 0 0011.177 0h-3.43a3.396 3.396 0 00-3.29 4.215l.147.591a1.15 1.15 0 00-.25.71c0 .64.522 1.161 1.162 1.161h.222c.28.712.804 1.3 1.473 1.658l-.2.999-1.785.357a2.896 2.896 0 00-1.69 1.028 2.904 2.904 0 00-.633 1.806v3.733c0 .96.781 1.742 1.742 1.742h8.13c.32 0 .58-.26.58-.58v-5.227h.634A4.01 4.01 0 0018 8.184v-4.76c0-.767-.624-1.39-1.39-1.39zm-1.513 2.613c0-.16.13-.29.29-.29h.58a.29.29 0 010 .58h-.29v.581h.29a.872.872 0 000-1.742h-.237l.08-.484a.811.811 0 011.609.133v2.674h-1.912l-.155-.156a.865.865 0 01-.255-.616v-.68zM10.52 9.871l-.48.8-.679-.272.88-.528h.279zm1.964-4.355c0 .32-.26.58-.58.58h-.056c.035-.188.055-.381.055-.58v-.58c.32 0 .58.26.58.58zm-6.968.58a.581.581 0 010-1.16v.58c0 .199.02.392.056.58h-.056zm0-2.313v.572c-.144 0-.28.03-.407.077l-.09-.358A2.81 2.81 0 017.747.581h3.43c.72 0 1.307.586 1.307 1.306 0 .72-.586 1.307-1.307 1.307h-.294a.723.723 0 01-.228-1.407l.179-.06-.184-.55-.179.06a1.3 1.3 0 00-.89 1.235c0 .037.007.072.01.109a5.723 5.723 0 01-1.561-.378l-.113-.046a1.753 1.753 0 00-2.401 1.626zm.58 1.733V3.783a1.172 1.172 0 011.605-1.087l.113.046a6.308 6.308 0 001.978.436 1.3 1.3 0 001.091.596h.294c.05 0 .097-.004.146-.007v1.75A2.616 2.616 0 018.71 8.128a2.616 2.616 0 01-2.613-2.613zM8.71 8.71c.331 0 .651-.051.952-.145l.174.872-1.126.676-1.127-.676.174-.872c.301.094.621.145.953.145zM7.205 9.887l.853.512-.682.273-.452-.728.28-.057zm-.818 7.532v-.58h6.387v.58H6.387zm6.387-1.16H6.387v-4.066h6.387v4.065zm3.797-5.817a3.431 3.431 0 01-2.582 1.17H6.387c-.32 0-.58.261-.58.582v3.483H4.644v.581h1.161v1.161h-1.16c-.641 0-1.162-.52-1.162-1.16v-3.734A2.312 2.312 0 015.34 10.26l.974-.195.825 1.327 1.544-.617.026.015.026-.015 1.547.619.914-1.523h2.67c.28 0 .56-.066.81-.191a1.8 1.8 0 001-1.62V6.678h1.742v1.506a3.43 3.43 0 01-.848 2.259z"
        fill={color}
      />
      <path
        d="M9.58 15.097a.872.872 0 000-1.742.872.872 0 000 1.742zm0-1.162a.29.29 0 110 .582.29.29 0 010-.582zM3.15 8.953a2.032 2.032 0 10-2.236 0l.206 1.032c.054.27.294.467.57.467h.685a.582.582 0 00.57-.467l.206-1.032zM.58 7.258c0-.8.652-1.452 1.452-1.452.8 0 1.452.652 1.452 1.452 0 .7-.5 1.287-1.161 1.422v-.604a.87.87 0 10-1.162-.818.87.87 0 00.58.818v.604a1.454 1.454 0 01-1.16-1.422zm1.162 0a.29.29 0 11.581 0 .29.29 0 01-.581 0zM1.69 9.871l-.128-.638c.151.036.308.057.47.057.162 0 .32-.02.47-.057l-.127.638H1.69zM1.742 3.484h.58v1.161h-.58V3.484zM.321 3.882l.537-.222.444 1.073-.536.222-.445-1.073zM2.765 4.733L3.21 3.66l.536.223-.444 1.073-.537-.223z"
        fill={color}
      />
    </svg>
  ),
  menuOpen: ({ width, height, color }: IconProps) => (
    <svg
      className="iterating"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000"
        d="M4 18a.965.965 0 0 1-.712-.288A.972.972 0 0 1 3 17c0-.283.095-.52.288-.712A.97.97 0 0 1 4 16h16c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.097.52-.288.713A.957.957 0 0 1 20 18H4Zm0-5a.965.965 0 0 1-.712-.288A.972.972 0 0 1 3 12c0-.283.095-.52.288-.712A.97.97 0 0 1 4 11h16c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.097.52-.288.713A.957.957 0 0 1 20 13H4Zm0-5a.965.965 0 0 1-.712-.288A.972.972 0 0 1 3 7c0-.283.095-.52.288-.712A.97.97 0 0 1 4 6h16c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.097.52-.288.713A.957.957 0 0 1 20 8H4Z"
      />
    </svg>
  ),
  menuClose: ({ width, height, color }: IconProps) => (
    <svg
      className="iterating"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000"
        d="m12 13.4-4.9 4.9a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275.948.948 0 0 1-.275-.7c0-.283.091-.517.275-.7l4.9-4.9-4.9-4.9a.948.948 0 0 1-.275-.7c0-.283.091-.517.275-.7a.948.948 0 0 1 .7-.275c.283 0 .516.092.7.275l4.9 4.9 4.9-4.9a.948.948 0 0 1 .7-.275c.283 0 .516.092.7.275a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7L13.4 12l4.9 4.9a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275L12 13.4Z"
      />
    </svg>
  ),
};
