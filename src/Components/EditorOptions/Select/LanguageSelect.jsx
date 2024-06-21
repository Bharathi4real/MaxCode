import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";

// It can be found on /languages endpoint
const languageData = [ 
  {
    "language_id": 45,
    "name": "Assembly (NASM 2.14.02)",
    "label": "Assembly (NASM 2.14.02)"
  },
  {
    "language_id": 46,
    "name": "Bash (5.0.0)",
    "label": "Bash (5.0.0)"
  },
  {
    "language_id": 47,
    "name": "Basic (FBC 1.07.1)",
    "label": "Basic (FBC 1.07.1)"
  },
  {
    "language_id": 48,
    "name": "C (GCC 7.4.0)",
    "label": "C (GCC 7.4.0)"
  },
  {
    "language_id": 52,
    "name": "C++ (GCC 7.4.0)",
    "label": "C++ (GCC 7.4.0)"
  },
  {
    "language_id": 49,
    "name": "C (GCC 8.3.0)",
    "label": "C (GCC 8.3.0)"
  },
  {
    "language_id": 53,
    "name": "C++ (GCC 8.3.0)",
    "label": "C++ (GCC 8.3.0)"
  },
  {
    "language_id": 50,
    "name": "C (GCC 9.2.0)",
    "label": "C (GCC 9.2.0)"
  },
  {
    "language_id": 54,
    "name": "C++ (GCC 9.2.0)",
    "label": "C++ (GCC 9.2.0)"
  },
  {
    "language_id": 51,
    "name": "C# (Mono 6.6.0.161)",
    "label": "C# (Mono 6.6.0.161)"
  },
  {
    "language_id": 55,
    "name": "Common Lisp (SBCL 2.0.0)",
    "label": "Common Lisp (SBCL 2.0.0)"
  },
  {
    "language_id": 56,
    "name": "D (DMD 2.089.1)",
    "label": "D (DMD 2.089.1)"
  },
  {
    "language_id": 57,
    "name": "Elixir (1.9.4)",
    "label": "Elixir (1.9.4)"
  },
  {
    "language_id": 58,
    "name": "Erlang (OTP 22.2)",
    "label": "Erlang (OTP 22.2)"
  },
  {
    "language_id": 44,
    "name": "Executable",
    "label": "Executable"
  },
  {
    "language_id": 59,
    "name": "Fortran (GFortran 9.2.0)",
    "label": "Fortran (GFortran 9.2.0)"
  },
  {
    "language_id": 60,
    "name": "Go (1.13.5)",
    "label": "Go (1.13.5)"
  },
  {
    "language_id": 61,
    "name": "Haskell (GHC 8.8.1)",
    "label": "Haskell (GHC 8.8.1)"
  },
  {
    "language_id": 62,
    "name": "Java (OpenJDK 13.0.1)",
    "label": "Java (OpenJDK 13.0.1)"
  },
  {
    "language_id": 63,
    "name": "JavaScript (Node.js 12.14.0)",
    "label": "JavaScript (Node.js 12.14.0)"
  },
  {
    "language_id": 64,
    "name": "Lua (5.3.5)",
    "label": "Lua (5.3.5)"
  },
  {
    "language_id": 65,
    "name": "OCaml (4.09.0)",
    "label": "OCaml (4.09.0)"
  },
  {
    "language_id": 66,
    "name": "Octave (5.1.0)",
    "label": "Octave (5.1.0)"
  },
  {
    "language_id": 67,
    "name": "Pascal (FPC 3.0.4)",
    "label": "Pascal (FPC 3.0.4)"
  },
  {
    "language_id": 68,
    "name": "PHP (7.4.1)",
    "label": "PHP (7.4.1)"
  },
  {
    "language_id": 43,
    "name": "Plain Text",
    "label": "Plain Text"
  },
  {
    "language_id": 69,
    "name": "Prolog (GNU Prolog 1.4.5)",
    "label": "Prolog (GNU Prolog 1.4.5)"
  },
  {
    "language_id": 70,
    "name": "Python (2.7.17)",
    "label": "Python (2.7.17)"
  },
  {
    "language_id": 71,
    "name": "Python (3.8.1)",
    "label": "Python (3.8.1)"
  },
  {
    "language_id": 72,
    "name": "Ruby (2.7.0)",
    "label": "Ruby (2.7.0)"
  },
  {
    "language_id": 73,
    "name": "Rust (1.40.0)",
    "label": "Rust (1.40.0)"
  },
  {
    "language_id": 74,
    "name": "TypeScript (3.7.4)",
    "label": "TypeScript (3.7.4)"
  }
];
export default function LanguageSelect({ language, handleChange }) {
  return (
    <Box width="100%">
      <InputLabel sx={{ mb: 1 }}>Language</InputLabel>
      <Autocomplete
        fullWidth
        options={languageData}
        getOptionLabel={(option) => option.label}
        size="small"
        defaultValue={languageData[0]}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        onChange={handleChange}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Typography component="p" variant="subtitle2">
              {option.label}
            </Typography>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            color="primary"
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Box>
  );
}
