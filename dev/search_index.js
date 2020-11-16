var documenterSearchIndex = {"docs":
[{"location":"eventsets/#Event-Sets","page":"Event Sets","title":"Event Sets","text":"","category":"section"},{"location":"eventsets/","page":"Event Sets","title":"Event Sets","text":"Event Sets are user-defined groups of events (preset or native). The user is free to allocate and use any number of them provided the required resources can be provided.","category":"page"},{"location":"eventsets/","page":"Event Sets","title":"Event Sets","text":"Multiple event sets can be used simultaneously and can even share counter values.","category":"page"},{"location":"eventsets/#Adding-and-removing-events","page":"Event Sets","title":"Adding and removing events","text":"","category":"section"},{"location":"eventsets/","page":"Event Sets","title":"Event Sets","text":"Events can be added to event set using push! and append!. Removal of events is done using empty! and delete!","category":"page"},{"location":"eventsets/","page":"Event Sets","title":"Event Sets","text":"push!(::EventSet, ::Event)\nappend!(::EventSet, ::Vector{Event})\nempty!(::EventSet)\ndelete!(::EventSet, ::Event)","category":"page"},{"location":"eventsets/#Base.push!-Tuple{EventSet,Union{PAPI.Native, PAPI.Preset}}","page":"Event Sets","title":"Base.push!","text":"push!(evtset::EventSet, evt::Event)\n\nAdds one PAPI event to the set. The event can be either a native or preset event.\n\n\n\n\n\n","category":"method"},{"location":"eventsets/#Base.append!-Tuple{EventSet,Array{Union{PAPI.Native, PAPI.Preset},1}}","page":"Event Sets","title":"Base.append!","text":"append!(evtset::EventSet, evt::Event)\n\nAdds multiple PAPI events to the set. The events can be either a native or preset events.\n\n\n\n\n\n","category":"method"},{"location":"eventsets/#Base.empty!-Tuple{EventSet}","page":"Event Sets","title":"Base.empty!","text":"empty!(evtset::EventSet)\n\nRemove all PAPI events from the set.\n\n\n\n\n\n","category":"method"},{"location":"eventsets/#Base.delete!-Tuple{EventSet,Union{PAPI.Native, PAPI.Preset}}","page":"Event Sets","title":"Base.delete!","text":"delete!(evtset::EventSet, evt::Event)\n\nRemove a PAPI events from the set. The event should have previously been added using push! or append!.\n\n\n\n\n\n","category":"method"},{"location":"events/#Events","page":"Events","title":"Events","text":"","category":"section"},{"location":"events/","page":"Events","title":"Events","text":"Events are occurrences of specific signals related to a processor’s function. Hardware performance counters exist as a small set of registers that count events, such as cache misses and floating point operations while the program executes on the processor. Other performance counters might exist on the operating system level for events such as page faults and context switches.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"Monitoring these events facilitates correlation between the structure of source/object code and the efficiency of the mapping of that code to the underlying architecture. Each processor/architecture/system has a number of events that are native to it. PAPI provides a software abstraction of these architecture-dependent native events into a collection of preset events that are accessible through the PAPI interface.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"PAPI.jl uses the Event type to represent both native events (PAPI.Native) and preset events (PAPI.Preset).","category":"page"},{"location":"events/#Native-events","page":"Events","title":"Native events","text":"","category":"section"},{"location":"events/","page":"Events","title":"Events","text":"Native events comprise the set of all events that are countable by the system. In many cases, these events will be available through a matching preset PAPI event. These native events can also be access directly, however this usage is intended for people who are very familiar with the particular platform in use. PAPI provides access to native events on all supported platforms through the low-level interface.","category":"page"},{"location":"events/#Presets","page":"Events","title":"Presets","text":"","category":"section"},{"location":"events/","page":"Events","title":"Events","text":"The PAPI library provides approximately 100 presets (predefined events) that are a common set of events relevant for application performance tuning. These events are typically found in many processors that provide performance counters and give access to the memory hierarchy, cache coherence protocol events, cycle and instruction counts, functional unit, and pipeline status.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"Preset events map symbolic names to specific native events on the particular architecture in use. For example, Total Cycles is represented as PAPI.TOT_CYC. A preset can be either directly available as a single counter, derived using a combination of counters, or unavailable on any particular platform.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"A full list of the presets and their job description can be found here.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"PAPI.jl includes the same set of presets represented as PAPI.TOT_CYC instead of PAPI_TOT_CYC.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"The exact semantics of an event counter are platform dependent. PAPI preset names are mapped onto available events in a way, so it can count as many similar types of events as possible on different platforms. Due to hardware implementation differences, it is not necessarily feasible to directly compare the counts of a particular PAPI event obtained on different hardware platforms.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"To determine which preset events are available on your specific platform, the available_presets function can be used:","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"using PAPI # hide\navailable_presets()","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"The exists function tests whether a single native or preset event is available:","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"using PAPI # hide\nexists(PAPI.TOT_INS)","category":"page"},{"location":"events/#Accessing-events","page":"Events","title":"Accessing events","text":"","category":"section"},{"location":"events/","page":"Events","title":"Events","text":"Preset events can be accessed using the predefined constants PAPI.TOT_CYC. All events can be accessed by name using the function name_to_event and converted back to their name with event_to_name","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"using PAPI #hide\ntot_ins = name_to_event(\"PAPI_TOT_INS\") # Total Instructions preset same as PAPI.TOT_INS\npage_faults = name_to_event(\"PAGE-FAULTS\") # Page-fault counter provided by perf, if available\ntot_cyc = event\"PAPI_TOT_CYC\" # same, but with macro","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"Base.show automatically converts the event back to its corresponding name.","category":"page"},{"location":"events/#Available-events","page":"Events","title":"Available events","text":"","category":"section"},{"location":"events/","page":"Events","title":"Events","text":"A full list of available events is provided by available_presets and available_native for presets and native events respectively.","category":"page"},{"location":"events/","page":"Events","title":"Events","text":"available_presets\navailable_native","category":"page"},{"location":"events/#PAPI.available_presets","page":"Events","title":"PAPI.available_presets","text":"available_presets()\n\nReturns a list of the presets available on the current platform.\n\n\n\n\n\n","category":"function"},{"location":"events/#PAPI.available_native","page":"Events","title":"PAPI.available_native","text":"available_native()\n\nReturns a list of the native events available on the current platform.\n\n\n\n\n\n","category":"function"},{"location":"public/#Public-Documentation","page":"Public","title":"Public Documentation","text":"","category":"section"},{"location":"public/","page":"Public","title":"Public","text":"Documentation for PAPI.jl's public interface.","category":"page"},{"location":"public/","page":"Public","title":"Public","text":"See the Internals section of the manual for internal package docs covering all submodules.","category":"page"},{"location":"public/#Contents","page":"Public","title":"Contents","text":"","category":"section"},{"location":"public/","page":"Public","title":"Public","text":"Pages = [\"public.md\"]","category":"page"},{"location":"public/#Index","page":"Public","title":"Index","text":"","category":"section"},{"location":"public/","page":"Public","title":"Public","text":"Pages = [\"public.md\"]","category":"page"},{"location":"public/#Public-Interface","page":"Public","title":"Public Interface","text":"","category":"section"},{"location":"public/","page":"Public","title":"Public","text":"Modules = [PAPI]\nOrder   = [:function, :type]","category":"page"},{"location":"public/#PAPI.accum_counters!-Tuple{EventSet,Array{Int64,1}}","page":"Public","title":"PAPI.accum_counters!","text":"accum_counters!(evtset::EventSet, values::Vector{Counts})\n\nAccumulate and reset counters. accum_counters! accumulates the event counters into values. The counters are reset and left running after the call.\n\nThe user must provide a vector of the correct size (equal to the number of events)\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.available_native-Tuple{}","page":"Public","title":"PAPI.available_native","text":"available_native()\n\nReturns a list of the native events available on the current platform.\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.available_presets-Tuple{}","page":"Public","title":"PAPI.available_presets","text":"available_presets()\n\nReturns a list of the presets available on the current platform.\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.event_to_name-Tuple{Union{PAPI.Native, PAPI.Preset}}","page":"Public","title":"PAPI.event_to_name","text":"event_to_name(evt::Event)\n\nConverts an event into a name.\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.name_to_event-Tuple{AbstractString}","page":"Public","title":"PAPI.name_to_event","text":"name_to_event(evt::Event)\n\nConverts event name into an event\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.num_counters-Tuple{}","page":"Public","title":"PAPI.num_counters","text":"Get the number of hardware counters available on the system\n\nPAPI.num_counters() initializes the PAPI library if necessary.\n\nPAPI_num_counters()` returns the number of hardware counters available on the system.\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.profile-Tuple{Function,Array{Union{PAPI.Native, PAPI.Preset},1}}","page":"Public","title":"PAPI.profile","text":"profile(f::Function, events::Vector{Event}; gcfirst::Bool=true, warmup::Int64=0)\n\nExecute the function f once while counting specific events.\n\nArguments:\n\n-`f`: the function to profile\n-`events`: the events to count\n-`gcfirst`: run the gc several times before the execution to reduce gc noise\n-`warmup`: number of times to run the function prior to counting\n\nReturn values:\n\nEventValues containing the events, counts and runtime collected\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.read_counters!-Tuple{EventSet,Array{Int64,1}}","page":"Public","title":"PAPI.read_counters!","text":"read_counters!(evtset::EventSet, values::Vector{Counts})\n\nRead and reset counters. read_counters! copies the event counters into values. The counters are reset and left running after the call.\n\nThe user must provide a vector of the correct size (equal to the number of events)\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.reset_counters!-Tuple{EventSet}","page":"Public","title":"PAPI.reset_counters!","text":"reset_counters!(evtset::EventSet)\n\nReset counters and leaves them running after the call.\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.sample-Tuple{Function,Array{Union{PAPI.Native, PAPI.Preset},1}}","page":"Public","title":"PAPI.sample","text":"sample(f::Function, events::Vector{Event}; max_secs::Float64=5, max_epochs::Int64=1000, gcsample::Bool=false, warmup::Int64=1)\n\nExecute the function f several times, each time counting specific events. Sampling continues until either the maximum number of samples max_epochs are collected or the runtime budget max_secs is exceeded.\n\nArguments:\n\n-`f`: the function to profile\n-`events`: the events to count\n-`max_secs`: maximum number of seconds to sample for\n-`gcsample`: run the gc several times before the execution to reduce gc noise\n-`warmup`: number of times to run the function prior to counting\n\nReturn values:\n\nEventStats containing the events, counts and runtime collected\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.start_counters-Tuple{EventSet}","page":"Public","title":"PAPI.start_counters","text":"start_counters(events)\n\nStart counting hardware events.  This function cannot be called if the counters have already been started.\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.stop_counters!-Tuple{EventSet,Array{Int64,1}}","page":"Public","title":"PAPI.stop_counters!","text":"stop_counters!(evtset::EventSet, values::Vector{Counts})\n\nStop counters and return current counts. The counters must have been started by a previous call to start_counters\n\nThe user must provide a vector of the correct size (equal to the number of events)\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.stop_counters-Tuple{EventSet}","page":"Public","title":"PAPI.stop_counters","text":"stop_counters(evtset::EventSet)\n\nStop counters and returns counts The counters must have been started by a previous call to start_counters\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.EventSet","page":"Public","title":"PAPI.EventSet","text":"EventSet\n\nA set of PAPI native or preset events\n\n\n\n\n\n","category":"type"},{"location":"public/#PAPI.EventSet-Tuple{AbstractArray{Union{PAPI.Native, PAPI.Preset},1}}","page":"Public","title":"PAPI.EventSet","text":"EventSet(evts::AbstractVector{Events})\n\nCreate an eventset containing the specified events. The events can be either native or preset PAPI events.\n\n\n\n\n\n","category":"method"},{"location":"public/#PAPI.EventSet-Tuple{Vararg{Union{PAPI.Native, PAPI.Preset},N} where N}","page":"Public","title":"PAPI.EventSet","text":"EventSet(evts::Events...)\n\nCreate an eventset containing the specified events. The events can be either native or preset PAPI events.\n\n\n\n\n\n","category":"method"},{"location":"counters/#Counting-Events","page":"Counting","title":"Counting Events","text":"","category":"section"},{"location":"counters/","page":"Counting","title":"Counting","text":"PAPI provides the ability to start, stop, read and accumulate the counters for a specified list of events. PAPI.jl exposes this functionality (See counting), but builds more user-friendly primitives on top of this.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"PAPI.jl stores count values using the Counts type.","category":"page"},{"location":"counters/#Measuring-Performance","page":"Counting","title":"Measuring Performance","text":"","category":"section"},{"location":"counters/","page":"Counting","title":"Counting","text":"PAPI,jl provides two ways of measuring performance counters:","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Quick, one shot profile\nExtensive sample based","category":"page"},{"location":"counters/#Profile","page":"Counting","title":"Profile","text":"","category":"section"},{"location":"counters/","page":"Counting","title":"Counting","text":"profile and @profile can be used to quickly measure some performance counts on a function or expression. Since the function is only executed once, these counts should be taken with a grain of salt as they can be riddled with noise especially for short running functions.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"profile\n@profile","category":"page"},{"location":"counters/#PAPI.profile","page":"Counting","title":"PAPI.profile","text":"profile(f::Function, events::Vector{Event}; gcfirst::Bool=true, warmup::Int64=0)\n\nExecute the function f once while counting specific events.\n\nArguments:\n\n-`f`: the function to profile\n-`events`: the events to count\n-`gcfirst`: run the gc several times before the execution to reduce gc noise\n-`warmup`: number of times to run the function prior to counting\n\nReturn values:\n\nEventValues containing the events, counts and runtime collected\n\n\n\n\n\n","category":"function"},{"location":"counters/#PAPI.@profile","page":"Counting","title":"PAPI.@profile","text":"profile(ex, args...)\n\nConvience macro for profiling an expression. Events can be specified as a first argument, otherwise the default events [BR_INS, BR_MSP, TOT_INS, TOT_CYC] are counted\n\nArguments and return values are similar to profile\n\nExample:\n\n@profile f(x, y, z) # sampling default events\n@profile [PAPI.TOT_INS, PAPI.DP_OPS, native_event] f(x, y, z) gcfirst=false\n\n\n\n\n\n","category":"macro"},{"location":"counters/","page":"Counting","title":"Counting","text":"The resulting EventValues contain the events and counts collected and when printed a nice summary is generated with additional information.","category":"page"},{"location":"counters/#Sample","page":"Counting","title":"Sample","text":"","category":"section"},{"location":"counters/","page":"Counting","title":"Counting","text":"Contrary to profile, sample and @sample perform multiple executions. The resulting samples can be used to investigate the distributions of the counts and to perform various statistical tests.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"note: Note\nYou should be careful when making decisions on performance based on single or aggregate values (such as mean, minimum, median) as well as \"eyeball\" statistics. Statistical tests such as a t-test, wilcoxon can be used.Personally, I'm also wary towards any asymptotical tests putting strong assumptions on the distributions. For example, performance numbers (even runtime) are not always normal distributed: the process is usually skewed towards one side. I tend to use the samples themselves as well as their quantiles.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"sample\n@sample","category":"page"},{"location":"counters/#PAPI.sample","page":"Counting","title":"PAPI.sample","text":"sample(f::Function, events::Vector{Event}; max_secs::Float64=5, max_epochs::Int64=1000, gcsample::Bool=false, warmup::Int64=1)\n\nExecute the function f several times, each time counting specific events. Sampling continues until either the maximum number of samples max_epochs are collected or the runtime budget max_secs is exceeded.\n\nArguments:\n\n-`f`: the function to profile\n-`events`: the events to count\n-`max_secs`: maximum number of seconds to sample for\n-`gcsample`: run the gc several times before the execution to reduce gc noise\n-`warmup`: number of times to run the function prior to counting\n\nReturn values:\n\nEventStats containing the events, counts and runtime collected\n\n\n\n\n\n","category":"function"},{"location":"counters/#PAPI.@sample","page":"Counting","title":"PAPI.@sample","text":"sample(ex, args...)\n\nConvience macro for sampling an expression. Events can be specified as a first argument, otherwise the default events [BR_INS, BR_MSP, TOT_INS, TOT_CYC] are counted\n\nArguments and return values are similar to sample\n\nExample:\n\n@sample f(x, y, z) # sampling default events\n@sample [PAPI.TOT_INS, PAPI.DP_OPS, native_event] f(x, y, z) max_secs=1\n\n\n\n\n\n","category":"macro"},{"location":"counters/","page":"Counting","title":"Counting","text":"The resulting EventStats contain the events and all counts collected and when printed a nice summary is generated with additional statistics. The additional statistics are computed using the mean and are mostly intended as information to guide the optimization process.","category":"page"},{"location":"counters/#Example","page":"Counting","title":"Example","text":"","category":"section"},{"location":"counters/","page":"Counting","title":"Counting","text":"As an example consider the following function","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"using PAPI #hide\n\nfunction mysum(X::AbstractArray)\n    s = zero(eltype(X))\n    for x in X\n        s += x\n    end\n    s\nend\nnothing #hide","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Next, we'll create an array of double precision values and produce a profile using the default events","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"note: Note\nwarmup is set to 1, to force compilation prior to measurement","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"X = rand(10000)\n@profile mysum(X) warmup=1","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Since the number of elements added was 10000, you can note it take roughly 4 instructions per element. Out of which one is a branch instruction, corresponding to the termination test of the loop. We also expect the data needs to be loaded in every iteration, something we can verify by additionally measuring the number of loads using the preset PAPI.LD_INS.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"@profile [PAPI.TOT_INS, PAPI.TOT_CYC, PAPI.LD_INS, PAPI.BR_INS] mysum(X)","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Indeed, in addition to the branch instruction there is a load in every iteration as well. Generally, you would expect a load, a branch, an addition and a counter increment in every iteration, and this data seems to confirm this. However modern processors are capable of loading and multiplying multiple data items at the same time. The @simd macro might be useful here.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"note: Note\n@simd instructs the compiler that it is safe to execute the iterations in arbitrary and overlapping order. This also means that we are fine with any floating-point errors introduced by this reordering of operations.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"function mysum2(X::AbstractArray)\n    s = zero(eltype(X))\n    @simd for x in X\n        s += x\n    end\n    s\nend\n\n@profile [PAPI.TOT_INS, PAPI.TOT_CYC, PAPI.LD_INS, PAPI.BR_INS] mysum2(X) warmup=1","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Note the reduction in the number of cycles, instructions, branches, loads and runtime. From these measurements, one could assume the addition of @simd has a positive effect. However, it would be better if we compute more samples and perform a statistical test to confirm that the effect is significant.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Finally, let's look at the number of floating-point operations and vectorized floating-point operations.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"@profile [PAPI.TOT_INS, PAPI.DP_OPS, PAPI.VEC_DP] mysum(X)","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"@profile [PAPI.TOT_INS, PAPI.DP_OPS, PAPI.VEC_DP] mysum2(X)","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Both functions perform the same number of additions (approx 1 per element), but mysum is able to vectorize those operations (performing almost 4 additions at the same time). Looking back at the earlier comparison, we can also see the number of loads has decreased by a factor of 4, indicating that the loop now loads roughly four elements simultaneously. The number of branches had decreased even more. Investigation of @code_native mysum2(X) indeed also indicated that the compiler does loop unrolling in addition to vectorization.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Let's now collect multiple samples in order to draw our final conclusion:","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"stats = @sample mysum(X) # original version\nstats2 = @sample mysum2(X) # optimized version","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"1000 samples were collected for both version for the default events as well as the runtimes. A decision can for example be made using a wilcoxon (or mann-whitney U) test. This tests whether the two sets of samples come from the same underlying distribution.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"using HypothesisTests\nx = stats.time\ny = stats2.time\nMannWhitneyUTest(x,y)","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Rejection of the null-hypothesis indicates the underlying distributions are different and the changes have some significant effect (in this case a positive effect).","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"note: Note\nAlternatively, a student t-test could be used to perform a similar test. However, this test assumes normally distributed samples. Plotting a histogram of the samples clearly indicates this is not the case.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"Using a Monte-Carlo estimator, the expected speedup can be computed as well as 95% uncertainty intervals.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"using Statistics\nprintln(\"expected speedup = \", mean(x ./ y'))\nprintln(\"95% of the time, the speedup lies within \", quantile(vec(x ./ y'), [.025, 0.975]))","category":"page"},{"location":"counters/#PAPI-interface","page":"Counting","title":"PAPI interface","text":"","category":"section"},{"location":"counters/","page":"Counting","title":"Counting","text":"Only a number of events can be counted at the same time, num_counters returns the number of hardware counters available on the system.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"num_counters","category":"page"},{"location":"counters/#PAPI.num_counters","page":"Counting","title":"PAPI.num_counters","text":"Get the number of hardware counters available on the system\n\nPAPI.num_counters() initializes the PAPI library if necessary.\n\nPAPI_num_counters()` returns the number of hardware counters available on the system.\n\n\n\n\n\n","category":"function"},{"location":"counters/","page":"Counting","title":"Counting","text":"After selecting a number of events to count, the counting process can be started and stopped using start_counters and stop_counters.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"warning: Warning\nIt is the user’s responsibility to choose events that can be counted simultaneously by reading the vendor’s documentation.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"start_counters\nstop_counters\nstop_counters!","category":"page"},{"location":"counters/#PAPI.start_counters","page":"Counting","title":"PAPI.start_counters","text":"start_counters(events)\n\nStart counting hardware events.  This function cannot be called if the counters have already been started.\n\n\n\n\n\n","category":"function"},{"location":"counters/#PAPI.stop_counters","page":"Counting","title":"PAPI.stop_counters","text":"stop_counters(evtset::EventSet)\n\nStop counters and returns counts The counters must have been started by a previous call to start_counters\n\n\n\n\n\n","category":"function"},{"location":"counters/#PAPI.stop_counters!","page":"Counting","title":"PAPI.stop_counters!","text":"stop_counters!(evtset::EventSet, values::Vector{Counts})\n\nStop counters and return current counts. The counters must have been started by a previous call to start_counters\n\nThe user must provide a vector of the correct size (equal to the number of events)\n\n\n\n\n\n","category":"function"},{"location":"counters/","page":"Counting","title":"Counting","text":"using PAPI #hide\ncomputation(n::Int64 = 10_000) = (tmp = 0.; for i = 1:n tmp += i end; tmp) #hide\nevents = Event[PAPI.TOT_INS, PAPI.DP_OPS]\nevtset = start_counters(events)\ncomputation()\nvalues = stop_counters(evtset)","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"During the counting process, the current counts can be queried and accumulated using read_counters! and accum_counters!.","category":"page"},{"location":"counters/","page":"Counting","title":"Counting","text":"read_counters!\naccum_counters!","category":"page"},{"location":"counters/#PAPI.read_counters!","page":"Counting","title":"PAPI.read_counters!","text":"read_counters!(evtset::EventSet, values::Vector{Counts})\n\nRead and reset counters. read_counters! copies the event counters into values. The counters are reset and left running after the call.\n\nThe user must provide a vector of the correct size (equal to the number of events)\n\n\n\n\n\n","category":"function"},{"location":"counters/#PAPI.accum_counters!","page":"Counting","title":"PAPI.accum_counters!","text":"accum_counters!(evtset::EventSet, values::Vector{Counts})\n\nAccumulate and reset counters. accum_counters! accumulates the event counters into values. The counters are reset and left running after the call.\n\nThe user must provide a vector of the correct size (equal to the number of events)\n\n\n\n\n\n","category":"function"},{"location":"counters/","page":"Counting","title":"Counting","text":"events = Event[PAPI.DP_OPS]\nvalues = Vector{Counts}(undef, length(events))\nevtset = start_counters(events)\ncomputation(100) # perform 100 double precision operations\nread_counters!(evtset, values)\nprintln(values[1], \" roughly equals 100\")\n\ncomputation(100) # perform 100 double precision operations\naccum_counters!(evtset, values)\nprintln(values[1], \" roughly equals 200\")\n\nvalues[1] = -100\ncomputation(100) # perform 100 double precision operations\naccum_counters!(evtset, values)\nprintln(values[1], \" roughly equals 0\")\nstop_counters(evtset); nothing","category":"page"},{"location":"#PAPI","page":"Home","title":"PAPI","text":"","category":"section"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Performance Application Programming Interface PAPI was designed to be a portable and efficient API to access the performance counters available on modern processors. These counters can provide insight to performance engineers about improvements that can be make in their code. As performance metrics can have different definitions and different programming interfaces across platforms, PAPI attempts:","category":"page"},{"location":"","page":"Home","title":"Home","text":"To present a set of standard definitions for performance metrics on all platforms\nTo provide a standardized API among users, vendors, and academics","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package provides access to the functionality of libPAPI, but also builds more high-level functions on top of it. Its goal is to implement useful primitives that developers can easily understand and use. For example,","category":"page"},{"location":"","page":"Home","title":"Home","text":"using PAPI\nf() = sum(sin, -1:.1:1)\n@profile f()","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the Index for the complete list of documented functions and types.","category":"page"},{"location":"#Prerequisites","page":"Home","title":"Prerequisites","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package assumes that libPAPI is available on the system and locatable by Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"To install libPAPI on Debian/Ubuntu, you'll need to run","category":"page"},{"location":"","page":"Home","title":"Home","text":"sudo apt-get install libpapi-dev","category":"page"},{"location":"#Manual-Outline","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"events.md\",\n    \"eventsets.md\",\n    \"counters.md\",\n]\nDepth = 2","category":"page"},{"location":"#Library-Outline","page":"Home","title":"Library Outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"public.md\", \"internals.md\"]","category":"page"},{"location":"#main-index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Contributions are encouraged. In particular, PAPI provides many components, configurable at compilation time, while counters can be accessed through the native API by name, this can be cumbersome, low-level and ill-documented.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If there are additional functions you would like to use, please open an issue or pull request.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Additional examples and documentation improvements are also very welcome.","category":"page"},{"location":"example/","page":"-","title":"-","text":"using PAPI X = rand(10000) function mysum(X)   x = zero(eltype(X))   for v in X     x += v   end   x end","category":"page"}]
}
