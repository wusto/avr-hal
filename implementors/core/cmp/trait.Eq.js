(function() {var implementors = {};
implementors["atmega_hal"] = [{"text":"impl Eq for ReferenceVoltage","synthetic":false,"types":[]},{"text":"impl Eq for AdcSettings","synthetic":false,"types":[]}];
implementors["attiny_hal"] = [{"text":"impl Eq for ReferenceVoltage","synthetic":false,"types":[]},{"text":"impl Eq for AdcSettings","synthetic":false,"types":[]}];
implementors["avr_device"] = [{"text":"impl Eq for Interrupt","synthetic":false,"types":[]}];
implementors["avr_hal_generic"] = [{"text":"impl Eq for ClockDivider","synthetic":false,"types":[]},{"text":"impl Eq for Error","synthetic":false,"types":[]},{"text":"impl Eq for Direction","synthetic":false,"types":[]},{"text":"impl Eq for Prescaler","synthetic":false,"types":[]},{"text":"impl Eq for SerialClockRate","synthetic":false,"types":[]},{"text":"impl Eq for DataOrder","synthetic":false,"types":[]},{"text":"impl Eq for Settings","synthetic":false,"types":[]},{"text":"impl&lt;CLOCK:&nbsp;Clock&gt; Eq for Baudrate&lt;CLOCK&gt;","synthetic":false,"types":[]},{"text":"impl Eq for Timeout","synthetic":false,"types":[]}];
implementors["embedded_hal"] = [{"text":"impl Eq for StandardId","synthetic":false,"types":[]},{"text":"impl Eq for ExtendedId","synthetic":false,"types":[]},{"text":"impl Eq for Id","synthetic":false,"types":[]},{"text":"impl Eq for ErrorKind","synthetic":false,"types":[]},{"text":"impl Eq for PinState","synthetic":false,"types":[]},{"text":"impl Eq for Polarity","synthetic":false,"types":[]},{"text":"impl Eq for Phase","synthetic":false,"types":[]},{"text":"impl Eq for Mode","synthetic":false,"types":[]},{"text":"impl Eq for Direction","synthetic":false,"types":[]}];
implementors["nb"] = [{"text":"impl&lt;E:&nbsp;Eq&gt; Eq for Error&lt;E&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Eq for Delimiter","synthetic":false,"types":[]},{"text":"impl Eq for Spacing","synthetic":false,"types":[]},{"text":"impl Eq for Ident","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Eq for Member","synthetic":false,"types":[]},{"text":"impl Eq for Index","synthetic":false,"types":[]},{"text":"impl Eq for Lifetime","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Eq for Cursor&lt;'a&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()