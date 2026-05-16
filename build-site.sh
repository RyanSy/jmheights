#!/bin/bash

# Define base directories
SERVICES_BASE="app/[category]/[service]"
SERVICE_AREAS_BASE="app/service-areas"

# --- 1. CORE PAGES ---
mkdir -p app/about/our-story app/about/licenses app/about/team
mkdir -p app/why-jm-heights
mkdir -p app/maintenance-plans
mkdir -p app/emergency-service
mkdir -p app/reviews app/financing app/coupons app/faqs

# Create standard page.tsx placeholders
for dir in app/about/our-story app/about/licenses app/about/team \
           app/why-jm-heights app/maintenance-plans app/emergency-service \
           app/reviews app/financing app/coupons app/faqs; do
    touch "$dir/page.tsx"
done

# --- 2. PLUMBING (Nested) ---
# Water Heaters
mkdir -p "$SERVICES_BASE/[subservice]"
PLUMBING_SUBS=("repair" "installation" "replacement" "tankless-installation" "tankless-repair")
for sub in "${PLUMBING_SUBS[@]}"; do
    mkdir -p "app/plumbing/water-heaters/$sub"
    touch "app/plumbing/water-heaters/$sub/page.tsx"
done

# Sewer & Drains
SEWER_SUBS=("line-repair" "line-replacement" "trenchless-repair" "cleaning" "camera-inspection")
for sub in "${SEWER_SUBS[@]}"; do
    mkdir -p "app/plumbing/sewer-services/$sub"
    touch "app/plumbing/sewer-services/$sub/page.tsx"
done

DRAIN_SUBS=("cleaning" "hydro-jetting" "clogged-drain-repair")
for sub in "${DRAIN_SUBS[@]}"; do
    mkdir -p "app/plumbing/drain-services/$sub"
    touch "app/plumbing/drain-services/$sub/page.tsx"
done

# Gas Line
GAS_SUBS=("repair" "installation" "leak-detection")
for sub in "${GAS_SUBS[@]}"; do
    mkdir -p "app/plumbing/gas-line-services/$sub"
    touch "app/plumbing/gas-line-services/$sub/page.tsx"
done

# Other Plumbing
touch app/plumbing/sump-pump-services/page.tsx
touch app/plumbing/leak-detection/page.tsx
touch app/plumbing/toilet-repair-installation/page.tsx
touch app/plumbing/faucet-repair-installation/page.tsx
touch app/plumbing/garbage-disposal/page.tsx
touch app/plumbing/backflow-testing/page.tsx

# --- 3. HVAC & HEATING (Nested) ---
HVAC_HEAT_PUMP_SUBS=("repair" "installation" "replacement")
for sub in "${HVAC_HEAT_PUMP_SUBS[@]}"; do
    mkdir -p "app/hvac/heat-pumps/$sub"
    touch "app/hvac/heat-pumps/$sub/page.tsx"
done

IAQ_SUBS=("humidifiers" "air-purifiers" "duct-cleaning" "dehumidifiers")
for sub in "${IAQ_SUBS[@]}"; do
    mkdir -p "app/hvac/indoor-air-quality/$sub"
    touch "app/hvac/indoor-air-quality/$sub/page.tsx"
done

HEATING_BOILER_SUBS=("repair" "installation" "replacement")
for sub in "${HEATING_BOILER_SUBS[@]}"; do
    mkdir -p "app/heating/boilers/$sub"
    touch "app/heating/boilers/$sub/page.tsx"
done

HEATING_FURNACE_SUBS=("repair" "installation" "replacement")
for sub in "${HEATING_FURNACE_SUBS[@]}"; do
    mkdir -p "app/heating/furnaces/$sub"
    touch "app/heating/furnaces/$sub/page.tsx"
done

# --- 4. COMMERCIAL ---
COMMERCIAL_SUBS=("plumbing" "hvac" "refrigeration" "boilers" "water-heaters" "preventive-maintenance")
for sub in "${COMMERCIAL_SUBS[@]}"; do
    mkdir -p "app/commercial/$sub"
    touch "app/commercial/$sub/page.tsx"
done

# --- 5. SERVICE AREAS (Counties) ---
mkdir -p "$SERVICE_AREAS_BASE/bergen-county" "$SERVICE_AREAS_BASE/passaic-county"
touch "$SERVICE_AREAS_BASE/bergen-county/page.tsx"
touch "$SERVICE_AREAS_BASE/passaic-county/page.tsx"

echo "Site structure generation complete."