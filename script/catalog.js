document.addEventListener('DOMContentLoaded', function() {
    const data = {
        "SUBFRAME": {
            "image": "sub_frame.png",
            "fastening": "4x10",
            "dual": "×"
        },
        "WISHBONE": {
            "image": "wishbone.png",
            "fastening": "2x10",
            "dual": "✓"
        },
        "SPINDLE": {
            "image": "spindle.png",
            "fastening": "1x12",
            "dual": "✓"
        },
        "STRUT": {
            "image": "strut.png",
            "fastening": "4x9; 3x10",
            "dual": "✓"
        },
        "STEERING RACK": {
            "image": "steering_rack.png",
            "fastening": "4x9",
            "dual": "✓"
        },
        "STEERING ROD": {
            "image": "steering_rod.png",
            "fastening": "1x12",
            "dual": "✓"
        },
        "STEERING COLUMN": {
            "image": "steering_column.png",
            "fastening": "2x8",
            "dual": "×"
        },
        "STEERING WHEEL": {
            "image": "steering_wheel.png",
            "fastening": "1x10",
            "dual": "×"
        },
        "SHOCK ABSORBER": {
            "image": "shock_absorber.png",
            "fastening": "1x12;2x6",
            "dual": "×"
        },
        "DRUM BRAKE": {
            "image": "drum_brake.png",
            "fastening": "1x14",
            "dual": "×"
        },
        "FUEL TANK": {
            "image": "fuel_tank.png",
            "fastening": "7x11",
            "dual": "×"
        },
        "PIPE": {
            "image": "pipe.png",
            "fastening": "3x7",
            "dual": "×"
        },
        "EXHAUST MUFFLER": {
            "image": "exhaust_muffler.png",
            "fastening": "1x7",
            "dual": "×"
        },
        "HAND BRAKE": {
            "image": "hand_brake.png",
            "fastening": "4x8;1x5",
            "dual": "×"
        },
        "FUEL STRAINER": {
            "image": "fuel_strainer.png",
            "fastening": "1x8",
            "dual": "×"
        },
        "ELECTRICS": {
            "image": "electrics.png",
            "fastening": "2x8",
            "dual": "×"
        },
        "CLUTCH MASTER CYLINDER": {
            "image": "clutch_master_cylinder.png",
            "fastening": "2x8",
            "dual": "×"
        },
        "BRAKE MASTER CYLINDER": {
            "image": "brake_master_cylinder.png",
            "fastening": "2x8",
            "dual": "×"
        },
        "CLUTCH LINING": {
            "image": "clutch_lining.png",
            "fastening": "2x7",
            "dual": "×"
        },
        "BRAKE LINING": {
            "image": "brake_lining.png",
            "fastening": "11x7",
            "dual": "×"
        },
        "COIL_SPRING": {
            "image": "coil_spring.png",
            "fastening": "11x7",
            "dual": "×"
        },
        "TRAIL_ARM": {
            "image": "trail_arm.png",
            "fastening": "11x7",
            "dual": "×"
        }
    };

    const container = document.getElementById('partsGrid');
    const searchInput = document.getElementById('partSearchInput');

    if (!container || !searchInput) {
        console.error('Не найдены необходимые элементы DOM!');
        return;
    }

    function renderPart(partName, partData) {
        return `
            <div class="part-card" id="${partName.replace(/\s+/g, '_')}">
                <h3 style="justify-self: center">${partName}</h3>
                <img src="img/parts/${partData.image}" alt="${partName}" loading="lazy" style="width: 90%; justify-self: center">
                <div class="part-info">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0;">
                        <strong>Крепёж:</strong>
                        <span style="font-size: 18px;">${partData.fastening}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0;">
                        <strong>Двойная:</strong>
                        <span style="font-size: 18px;">${partData.dual}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function updateParts(searchTerm = '') {
        container.innerHTML = '';
        let found = false;
            
        for (const [partName, partData] of Object.entries(data)) {
            if (partName.toLowerCase().includes(searchTerm.toLowerCase())) {
                container.innerHTML += renderPart(partName, partData);
                found = true;
            }
        }
        
        if (!found) {
            container.innerHTML = `
                <div style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 24px;
                    color: #FFC107;
                ">
                    ничего не найдено :(
                </div>
            `;
        }
    }

    searchInput.addEventListener('input', (e) => {
        updateParts(e.target.value);
    });

    updateParts();
});